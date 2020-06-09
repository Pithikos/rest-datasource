<h1><img height="40" title="Datasource Logo" src="./src/img/logo.svg"> Datasource for Grafana</h1>

[![CircleCI](https://circleci.com/gh/grafana/simple-datasource/tree/master.svg?style=svg)](https://circleci.com/gh/grafana/simple-datasource/tree/master)

There's already two json-datasource plugins, however they are both overly complex. So I made this plugin to save you some time;

1. Keep a single base REST endpoint to fetch the data.
2. Keep it RESTful; support nested resources, URL params and only GET allowed.
3. Support for single values and time series data.
4. Infer types without cluttering the backend API.


## Plugin settings

 - `endpoint` - the base URL to use for fetching data, e.g. `myapp.com/stats/`
 - `authorization` - value of the Authorization header.

> If you are using the authorization header, ensure that the user with the token only has access to the endpoint and not more.


## Backend endpoint

1. You need to implement a single endpoint that returns status 200 and the JSON data.
2. Each metric in the JSON can return either a single value or an object of series.

Below is a Django example

```python
from datetime import datetime

class StatsView(APIView):
    def get(self, request, format=None):
        now = datetime.now().timestamp() * 1000  # Python uses secs instead of ms

        return Response({
            "numUsers": 2,
            "userActivity": {
                "active":   [1, 2, 5],
                "inactive": [2, 5, 3],
                "time": [
                    now - 5000000,
                    now - 1000000,
                    now,
                ]
            },
        })
```

A few things to note:

  - `time` is special in this example in that it tells Grafana the type of values. This is needed mainly when dealing with dates.
  - the backend will always receive the params `from` and `to` which can be used for filtering based on timestamps.

The plugin will try to detect the type in this order:

  1. Check if key name corresponds to a known Grafana type (*boolean*, *string*, *time*, *trace*, *other*).
  2. Check if key specifies a type; e.g. *birthday_date:time*
  3. Will use the type of the first value in the array.


## Visualizing the data

When creating graphs you have two parameters;

  - `Resource Path`: Path to fetch the JSON from. E.g. `users/?active=true`
  - `Payload Key`:  Specify the key to access the payload. This is evaluated to javascript so
    you can use common javascript. E.g. `userActivity.active[0]`

> Resource path can take URL params. These will be added to the de-facto `from` and `to` which are sent regardless.

With time series, graphs are crated as usual.

For single values, you need to choose `Panel > Fields` and choose either **All Fields** or a specific field.


## Development

Ensure you have downloaded the Grafana gzip. Ensure this project lives under `data/plugins` from the unzipped tarball.

Run server

    export GRAFANA_HOME=<path to unzipped Grafana>
    yarn devserver

This will ensure that rebuilding of assets occur on file changes and restart the server.

> If you need to reset the database, simply remove the *grafana.db* file.

Run tests

    yarn test


## Production

Build assets

    yarn build
