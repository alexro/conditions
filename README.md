As even google and git projects started with sloppy code - it would be a mistake to judge this code by completeness and perfection

## Server:


A simple Node/Express app with 1 api endpoint and mocha/chai tests

The project has been setup from scratch using npm

To restore node_modules: npm ci

To run: npm start

To run tests: npm test


For production use will need a lot of extra stuff: hotreload, middleware, logging, webpack, linting to name a few


Also, the data would be served from a remote location, not local drive. And the data should be streamed.


## Client:


A React/Redux app with 1 page view to display data coming from server above using Styled components

The project has been setup with new version of CreateReactApp using provided Redux Toolkit template


So the project structure is opionated by the React/Redux team,

same about tests and Redux configuration (using hooks) - I left in some comments from them to help understand



To restore node_modules: npm ci

To run: npm start

To run tests: npm test -- --watchAll=false


For production use this templated setup is not really suitable, better to use webpack to have more control.

The server url is hardcoded in index.js - in a production app would sit in a separate config and be configured during build

## Server & Client:

To restore node_modules: ./restore.sh

To run both projects from the root folder: ./start.sh

To stop both servers: close terminal window

** Uses port 3080 for server and 3081 for client **

## Docker

To automatically build the images for server and client, start with docker-compose and open the url
use: ./docker-start.sh

To stop: ./docker-stop.sh

** docker and docker-compose should be installed **
