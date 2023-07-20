const Ejs = require('ejs')

module.exports = (server, options) => ({
  path: 'views',
  layout: true,
  layoutPath: 'views/layouts',
  isCached: !options.developmentMode,
  defaultExtension: 'ejs',
  engines: {
    ejs: Ejs
  },
  context: {
    options,
    baseURI: server.realm.modifiers.route.prefix || ''
  }
})
