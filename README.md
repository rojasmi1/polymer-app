# Personal website using polymer
## Based on [Polymer App Toolbox - Starter Kit](https://github.com/PolymerElements/polymer-starter-kit)

This is the base project for creating my personal website, just for the sake of learning how to work with Polymer. Feel free to use this project as a reference in case you want to use CircleCI for continuous integration and Heroku for deployment, the circle.yml file contains some basic configuration to run the tests correctly and the npm scripts required for deploying the application in Heroku are already tested.

Development instance of the application running: https://my-polymer-app.herokuapp.com/

### What technologies are used in this project?
- Polymer
- Webcomponentjs as the polyfill for Custom Elements
- Vulcanize (out-of-the-box from polymer-cli)
- CircleCI
- Heroku (not mandatory)


### Setup

##### Prerequisites

First, install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[npm](https://www.npmjs.com) (we assume you have pre-installed [node.js](https://nodejs.org)).

    npm install -g polymer-cli

 For serving the app in dev mode watching for changes in the source you need browser-sync

    npm install -g browser-sync

### Start the development server

This command serves the app at `http://localhost:8080` and provides basic URL
routing for the app. Then browser-sync is started using proxy configuration to watch for changes in the code
and make the app available at `http://localhots:3000`:

    npm run start:dev

### Build

This command performs HTML, CSS, and JS minification on the application
dependencies, and generates a service-worker.js file with code to pre-cache the
dependencies based on the entrypoint and fragments specified in `polymer.json`.
The minified files are output to the `build/unbundled` folder, and are suitable
for serving from a HTTP/2+Push compatible server.

In addition the command also creates a fallback `build/bundled` folder,
generated using fragment bundling, suitable for serving from non
H2/push-compatible servers or to clients that do not support H2/Push.

    polymer build

### Preview the build

This command serves the minified version of the app at `http://localhost:8080`
in an unbundled state, as it would be served by a push-compatible server:

    polymer serve build/unbundled

This command serves the minified version of the app at `http://localhost:8080`
generated using fragment bundling:

    polymer serve build/bundled

### Run tests

This command will run [Web Component Tester](https://github.com/Polymer/web-component-tester)
against the browsers currently installed on your machine:

    polymer test

### Adding a new view

You can extend the app by adding more views that will be demand-loaded
e.g. based on the route, or to progressively render non-critical sections of the
application. Each new demand-loaded fragment should be added to the list of
`fragments` in the included `polymer.json` file. This will ensure those
components and their dependencies are added to the list of pre-cached components
and will be included in the `bundled` build.
