#!/bin/bash
# wait-for-grid.sh

set -e

cmd="$@"
# Will require jq installed via apt-get, otherwise the script will keep printing Waiting without completing the execution.
# Selenium hug host is "selenium-hub". "localhost" doesn't make sense since selenium hub is started as isolated container.
while ! curl -sSL "http://selenium-hub:4444/wd/hub/status" 2>&1 \
        | jq -r '.value.ready' 2>&1 | grep "true" >/dev/null; do
    echo 'Waiting for the Grid'
    sleep 1
done

>&2 echo "Selenium Grid is up - executing tests"
exec $cmd