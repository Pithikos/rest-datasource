# Grafana REST datasource

[![CircleCI](https://circleci.com/gh/grafana/simple-datasource/tree/master.svg?style=svg)](https://circleci.com/gh/grafana/simple-datasource/tree/master)

There's already two plugins for dealing with JSON but their interface is somewhat complex. This plugin
tries to solve the major issues I personally had with those;

1. Keep a single REST endpoint to fetch the data.
2. Querying works as normal URL. e.g. `/users/?active=true`
3. Make it simple to fetch both single values but also time series data.


## Plugin settings

Add the datasource and set the `endpoint` to the endpoint of your API that you wish to expose the data.

When creating graphs you have two parameters;

    `Resource Path`: Path to fetch the JSON from. E.g. `users/?active=true`
    `Payload Key`:  Specify the key o access the payload. This is evaluated to javascript so
      you can use a mix of dot notation, indice, etc. E.g. `userActivity.active[0]`


> Datasource endpoint will **always** receive a `from` and a `to` params.


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

`time` is special in this example in that it tells Grafana the type of values. This is needed mainly when dealing with dates.

The plugin will try to detect the type in this order:

  1. Check if key name corresponds to a known Grafana type (*boolean*, *string*, *time*, *trace*, *other*).
  2. Check if key specifies a type; e.g. *birthday_date:time*
  3. Will use the type of the first value in the array.


## Development

Ensure you have downloaded the Grafana gzip.

Run server

    yarn devserver

This will ensure that rebuilding of assets occur on file changes and restart the server.

Run tests

    yarn test

## Production

Build assets

    yarn build
