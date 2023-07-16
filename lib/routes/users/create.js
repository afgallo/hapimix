const users = []

module.exports = {
  method: 'POST',
  path: '/users',
  handler: (request, h) => {
    const { payload } = request
    users.push({ firstName: payload.firstName, lastName: payload.lastName })
    return h.viewWithLayout('demo1', { title: 'Demo 1', users })
  }
}
