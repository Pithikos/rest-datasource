#! /bin/bash
yarn dev
killall grafana-server
"${GRAFANA_HOME}/bin/grafana-server" -homepath "${GRAFANA_HOME}" &
