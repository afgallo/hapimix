const Code = require('@hapi/code')
const Lab = require('@hapi/lab')
const { deployment } = require('../../server')

const { expect } = Code
const { describe, it, before, after } = (exports.lab = Lab.script())

describe('GET /demo3', () => {
  let server

  before(async () => {
    server = await deployment({ start: false })
  })

  after(async () => {
    await server.stop()
  })

  it('responds with 200', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/demo3'
    })

    expect(res.statusCode).to.equal(200)
    expect(res.payload).to.contain('<title>Demo 3</title>')
  })
})
