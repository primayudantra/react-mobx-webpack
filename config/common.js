'use strict'

/** --------------------------------
*
*   PORT CONFIGURATION
*
-------------------------------- **/

module.exports = {

  development: {
    expressHost: '0.0.0.0',
    expressPort: '9008'
  },

  staging: {
    expressHost: '0.0.0.0',
    expressPort: '9009'
  },

  production: {
    expressHost: '0.0.0.0',
    expressPort: '9010'
  }
};
