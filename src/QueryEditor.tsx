import defaults from 'lodash/defaults';

import React, { ChangeEvent, PureComponent } from 'react';
import { LegacyForms } from '@grafana/ui';
import { QueryEditorProps } from '@grafana/data';
import { DataSource } from './DataSource';
import { defaultQuery, MyDataSourceOptions, MyQuery } from './types';

const { FormField } = LegacyForms;

type Props = QueryEditorProps<DataSource, MyQuery, MyDataSourceOptions>;

export class QueryEditor extends PureComponent<Props> {
  onResourcePathChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({ ...query, resourcePath: event.target.value });
    // executes the query
    onRunQuery();
  };

  onPayloadKeyChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({ ...query, payloadKey: event.target.value });
    // executes the query
    onRunQuery();
  };

  render() {
    const query = defaults(this.props.query, defaultQuery);
    const { resourcePath, payloadKey } = query;

    return (
      <div className="gf-form">
        <FormField
          labelWidth={8}
          value={resourcePath || ''}
          onChange={this.onResourcePathChange}
          label="Resource Path"
          tooltip="Specify a specific subpath or use query params. E.g. /users/?active=true"
        />
        <FormField
          labelWidth={10}
          value={payloadKey}
          onChange={this.onPayloadKeyChange}
          label="Payload Key"
          tooltip="The key is evaluated as simple javascript. So you can use dot-notation, indice, etc. E.g. users[0].numImages"
        />
      </div>
    );
  }
}
