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

  onResponseAccessChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({ ...query, responseAccess: event.target.value });
    // executes the query
    onRunQuery();
  };

  render() {
    const query = defaults(this.props.query, defaultQuery);
    const { resourcePath, responseAccess } = query;

    return (
      <div className="gf-form">
        <FormField
          labelWidth={8}
          value={resourcePath || ''}
          onChange={this.onResourcePathChange}
          label="Resource Path"
          tooltip="E.g. /users/?active=true"
        />
        <FormField
          labelWidth={10}
          value={responseAccess}
          onChange={this.onResponseAccessChange}
          label="Response Access"
          tooltip="Specify which item to access from response object. E.g. data['num_users']"
        />
      </div>
    );
  }
}
