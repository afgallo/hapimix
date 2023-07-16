const Code = require('@hapi/code')
const Lab = require('@hapi/lab')
const { deployment } = require('../../../server')

const { expect } = Code
const { describe, it, before, after } = (exports.lab = Lab.script())

describe('POST /users', () => {
  let server

  before(async () => {
    server = await deployment({ start: false })
  })

  after(async () => {
    await server.stop()
  })

  it('responds with 403', async () => {
    const res = await server.inject({
      method: 'POST',
      url: '/users'
    })

    expect(res.statusCode).to.equal(403)
  })

  it('responds with 200', async () => {
    // First, simulate a GET request to obtain the CSRF token
    const getRes = await server.inject({
      method: 'GET',
      url: '/demo1' // Modify if necessary
    })

    // Extract CSRF token from the payload
    const csrfTokenRegex = /name="crumb" value="([^"]+)"/
    const csrfTokenMatch = csrfTokenRegex.exec(getRes.result)
    const csrfToken = csrfTokenMatch ? csrfTokenMatch[1] : null

    const res = await server.inject({
      method: 'POST',
      url: '/users',
      payload: `crumb=${csrfToken}&firstName=Test&lastName=Test`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        cookie: `crumb=${csrfToken}`
      }
    })

    expect(res.statusCode).to.equal(200)
    expect(res.payload).to.contain('<td class="px-6 py-4">\n' + '                  Test\n')
  })
})
