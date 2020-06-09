import defaults from 'lodash/defaults';

import {
  DataQueryRequest,
  DataQueryResponse,
  DataSourceApi,
  DataSourceInstanceSettings,
  MutableDataFrame,
  FieldType,
} from '@grafana/data';

import { MyQuery, MyDataSourceOptions, defaultQuery } from './types';

async function fetchResource(url) {
  return fetch(url, { headers: { 'Content-Type': 'application/json' } })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      return data;
    });
}

/*
Add params to given url
*/
function addParams(url, params) {
  url += !url.includes('?') ? '?' : '&';
  return url + $.param(params);
}

/*
Infer type from the key and fallback to checking first value
*/
function getType(key, values) {
  let keyLower = key.toLowerCase();
  if (FieldType[keyLower]) {
    return FieldType[keyLower];
  }
  if (keyLower.includes(':')) {
    return FieldType[key.split(':')[1]];
  }
  return typeof values[0];
}

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

module.exports = {};
module.exports.addParams = addParams;
module.exports.getType = getType;
