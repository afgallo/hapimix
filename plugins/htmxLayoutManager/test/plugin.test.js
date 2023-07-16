const Path = require('path')
const Code = require('@hapi/code')
const Lab = require('@hapi/lab')
const Hapi = require('@hapi/hapi')
const Vision = require('@hapi/vision')
const { plugin: HtmxLayoutManager } = require('../lib/index')

const { expect } = Code
const { describe, it } = (exports.lab = Lab.script())

describe('htmxLayoutManager', () => {
  it('throws an error if Vision is not registered', async () => {
    const server = Hapi.server()

    await expect(server.register(HtmxLayoutManager)).to.reject(
      Error,
      'You must register @hapi/vision before using htmxLayoutManager plugin'
    )
  })

  it('uses the correct layout based on the "hx-request" header', async () => {
    const server = Hapi.server()
    await server.register(Vision)

    server.views({
      engines: { hbs: require('handlebars') },
      defaultExtension: 'hbs',
      path: Path.resolve(__dirname, 'views'),
      partialsPath: Path.resolve(__dirname, 'views/partials')
    })

    await server.register(HtmxLayoutManager)

    server.route({
      method: 'GET',
      path: '/',
      handler: (_, h) => {
        return h.viewWithLayout('demo', { title: 'Test' }, 'layout')
      }
    })

    const resWithoutHx = await server.inject({ method: 'GET', url: '/' })
    expect(resWithoutHx.result).to.include('layout')

    const resWithHx = await server.inject({ method: 'GET', url: '/', headers: { 'hx-request': 'true' } })
    expect(resWithHx.result).to.include('layoutPartial')
  })
})
