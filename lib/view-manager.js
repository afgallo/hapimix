const Handlebars = require('handlebars')

module.exports = (server, options) => ({
  path: 'views',
  partialsPath: 'views/partials',
  helpersPath: 'views/helpers',
  isCached: !options.developmentMode,
  defaultExtension: 'hbs',
  engines: {
    hbs: Handlebars
  },
  context: {
    options,
    baseURI: server.realm.modifiers.route.prefix || ''
  }
})
