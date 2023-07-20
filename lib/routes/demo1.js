module.exports = {
  method: 'GET',
  path: '/demo1',
  handler: (_, h) => {
    return h.viewWithLayout('demo1', { title: 'Demo 1', users: [] })
  }
}
