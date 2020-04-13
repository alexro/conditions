#!/bin/bash
# start server in a background shell
(cd server && npm start &)
# start client and open in the browser
cd client && npm start
# close terminal window to release both processes
