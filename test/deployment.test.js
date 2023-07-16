const Code = require('@hapi/code')
const Lab = require('@hapi/lab')
const { deployment } = require('../server')
const Package = require('../package.json')

const { describe, it } = (exports.lab = Lab.script())
const { expect } = Code

describe('Deployment', () => {
  it('registers the main plugin.', async () => {
    const server = await deployment()

    expect(server.registrations[Package.name]).to.exist()

    await server.stop()
  })
})
