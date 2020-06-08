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
    .then(function(resp){
      return resp.json();
    }).then(function(data){
      return data;
    })
}

/*
Infer type from the key and fallback to checking first value
*/
function getType(key, values){
  let keyLower = key.toLowerCase();
  if (FieldType[keyLower]){
    return FieldType[keyLower];
  }
  if (keyLower.includes(":")){
    return FieldType[key.split(':')[1]];
  }
  return typeof(values[0]);
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

    // Return a constant for each query.
    const data = options.targets.map(target => {
      const query = defaults(target, defaultQuery);
      return new MutableDataFrame({
        refId: query.refId,
        fields: [
          { name: 'Time', values: [from, to], type: FieldType.time },
          { name: 'Value', values: [query.constant, query.constant], type: FieldType.number },
        ],
      });
    });

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
