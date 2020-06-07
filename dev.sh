#! /bin/bash
yarn dev
killall grafana-server
../../../bin/grafana-server -homepath "../../../" &
