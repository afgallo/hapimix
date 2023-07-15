const Path = require('path')
const Dotenv = require('dotenv')
const Confidence = require('@hapipal/confidence')
const Toys = require('@hapipal/toys')

// Pull .env into process.env
Dotenv.config({ path: Path.join(__dirname, '.env') })

// Glue manifest as a confidence store
module.exports = new Confidence.Store({
  server: {
    port: {
      $param: 'PORT',
      $coerce: 'number',
      $default: 3000
    },
    debug: {
      $filter: { $env: 'NODE_ENV' },
      $default: {
        log: ['error', 'start'],
        request: ['error']
      },
      production: {
        request: ['implementation']
      }
    },
    routes: {
      security: true
    }
  },
  register: {
    plugins: [
      {
        plugin: '../lib', // Main plugin
        options: {
          developmentMode: {
            $filter: { $env: 'NODE_ENV' },
            $default: true,
            production: false
          }
        }
      },
      {
        plugin: {
          $filter: { $env: 'NODE_ENV' },
          $default: '@hapipal/hpal-debug',
          production: Toys.noop
        }
      }
    ]
  }
})
