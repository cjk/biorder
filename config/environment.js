/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'biorder',
    firebase_instance: 'biorder',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    // This line is avoid errors from the edit-with-emacs extension (using inline
    // styles) to cause console-errors in Chrome (CjK 05.12.2014):
    contentSecurityPolicy: {
      'connect-src': "'self' wss://*.firebaseio.com",
      'script-src': "'self' 'unsafe-eval' https://cdn.firebase.com https://*.firebaseio.com http://localhost:35729",
      'style-src': "'self' 'unsafe-inline'"
    },

    cordova: {
      rebuildOnChange: false,
      emulate: false
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
