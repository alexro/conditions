#!/bin/bash
cd server && docker build -t conditions:server .
cd ../client && docker build -t conditions:client .
cd ..
docker-compose up -d

URL='http://localhost:3081'
[[ -x $BROWSER ]] && exec "$BROWSER" "$URL"
path=$(which xdg-open || which gnome-open) && exec "$path" "$URL"
echo "Can't find browser"