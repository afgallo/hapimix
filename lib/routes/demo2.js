module.exports = {
  method: 'GET',
  path: '/demo2',
  handler: (_, h) => {
    return h.viewWithLayout('demo2', { title: 'Demo 2' }, 'layout')
  }
}
