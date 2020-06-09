import defaults from 'lodash/defaults';

import {
  DataQueryRequest,
  DataQueryResponse,
  DataSourceApi,
  DataSourceInstanceSettings,
  MutableDataFrame,
} from '@grafana/data';

import { addParams, getType, fetchResource } from './api';

import { MyQuery, MyDataSourceOptions, defaultQuery } from './types';

export class DataSource extends DataSourceApi<MyQuery, MyDataSourceOptions> {
  constructor(instanceSettings: DataSourceInstanceSettings<MyDataSourceOptions>) {
    this.endpoint = instanceSettings.jsonData.endpoint;
    super(instanceSettings);
  }

  async query(options: DataQueryRequest<MyQuery>): Promise<DataQueryResponse> {
    const { range } = options;
    const from = range!.from.valueOf();
    const to = range!.to.valueOf();
    const endpoint = this.endpoint;

    // Return a payloadKey for each query.
    var data = [];
    for (var i = 0; i < options.targets.length; i++) {
      var target = options.targets[i];
      const query = defaults(target, defaultQuery);

      // Fetch data
      var resourcePath = !target.resourcePath ? '' : target.resourcePath;
      var url = addParams(endpoint + resourcePath, {
        from: from,
        to: to,
      });
      var responseData = await fetchResource(url);

      // Access key
      var values = eval(`responseData.${target.payloadKey}`); // eslint-disable-line no-eval
      if (typeof values === 'undefined') {
        console.log(`Invalid key: ${target.payloadKey}`);
        return { data };
      }

      // Create dataframe
      var fields = [];
      if (typeof values === 'object') {
        // Series
        var fieldNames = Object.keys(values);
        fieldNames.forEach(function(fieldName) {
          fields.push({
            name: fieldName,
            values: values[fieldName],
            type: getType(fieldName, values[fieldName]),
          });
        });
      } else {
        // Single value
        fields = [
          {
            name: target.payloadKey,
            values: [values],
            type: getType(target.payloadKey, values),
          },
        ];
      }
      data.push(
        new MutableDataFrame({
          refId: query.refId,
          fields: fields,
        })
      );
    }

    return { data };
  }

  async testDatasource() {
    // Implement a health check for your data source.
    let response = null;
    if (!this.endpoint) {
      return {
        status: 'failure',
        message: 'Missing endpoint',
      };
    }
    await fetch(this.endpoint, {
      headers: { 'Content-Type': 'application/json' },
    }).then(resp => (response = resp));

    if (response.status !== 200) {
      return {
        status: 'failure',
        message: `Got ${response.status} for ${this.endpoint}. Must be 200`,
      };
    }
    return {
      status: 'success',
      message: 'Success',
    };
  }
}
