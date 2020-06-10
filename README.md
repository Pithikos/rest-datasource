<h1><img height="40" title="Datasource Logo" src="https://raw.githubusercontent.com/Pithikos/rest-datasource/master/src/img/logo.svg"> Datasource for Grafana</h1>

[![CircleCI](https://circleci.com/gh/grafana/simple-datasource/tree/master.svg?style=svg)](https://circleci.com/gh/grafana/simple-datasource/tree/master)

There's already two json-datasource plugins, however they are both overly complex. So I made this plugin to save you some time;

1. Keep a single base REST endpoint to fetch the data.
2. Keep it RESTful; support nested resources, URL params and only GET allowed.
3. Support for single values and time series data.
4. Infer types without cluttering the backend API.


## Installation

Ensure you have at least **Grafana v7**. The plugin works with earlier versions but then you might not be able to visualize
single values in a graph.

Once added the rest-datasource, you must specify two settings

 - (required) `endpoint` - the base URL to use for fetching data, e.g. `http://myapp.com/stats/`
 - (optional) `authorization` - value of the Authorization header.

> If you are using the authorization header, ensure that the user with the token only has access to the endpoint and nothing else to minimize risk.


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

You can vizualize a single value like below

<img title="Example settings" src="https://raw.githubusercontent.com/Pithikos/rest-datasource/master/docs/single_value_settings.png">

The *resource path* tells what to access from the payload (you can use dot-notation, etc.). We then need to select the specific field
in the panel since we're dealing with a single value. Otherwise we can only visualize the value in a table format.

Non-single values in the payload can be shown directly without any extra work.


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

Make a release ([ref](https://grafana.com/tutorials/build-a-data-source-plugin/#9))

    # bump version in package.json
    git checkout -b release-<version>
    git add -f dist
    git commit -m "Release <version>"
    git tag -a <version> -m <version>
    git push --follow-tags

Build zip

    yarn zip
