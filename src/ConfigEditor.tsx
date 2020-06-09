import React, { ChangeEvent, PureComponent } from 'react';
import { LegacyForms } from '@grafana/ui';
import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { MyDataSourceOptions } from './types';

const { SecretFormField, FormField } = LegacyForms;

interface Props extends DataSourcePluginOptionsEditorProps<MyDataSourceOptions> {}

interface State {}

export class ConfigEditor extends PureComponent<Props, State> {
  onEndpointChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      endpoint: event.target.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  // Secure field (only sent to the backend)
  onAuthHeaderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      authHeader: event.target.value,
    };
    console.log('change..', event.target.value);
    onOptionsChange({ ...options, jsonData });
  };

  render() {
    const { options } = this.props;
    const { jsonData, secureJsonFields } = options;

    return (
      <div className="gf-form-group">
        <div className="gf-form">
          <FormField
            label="Endpoint"
            labelWidth={10}
            inputWidth={24}
            onChange={this.onEndpointChange}
            value={jsonData.endpoint || ''}
            placeholder="E.g. http://localhost:8000/stats/"
          />
        </div>

        <div className="gf-form-inline">
          <div className="gf-form">
            <FormField
              value={jsonData.authHeader || ''}
              label="Authorization Header"
              placeholder='e.g. "Token QWxhZG43gfdRpbjpPcfdGVuU245VzYW1l"'
              labelWidth={10}
              inputWidth={24}
              onChange={this.onAuthHeaderChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
