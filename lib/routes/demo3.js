module.exports = {
  method: 'GET',
  path: '/demo3',
  handler: (_, h) => {
    return h.viewWithLayout('demo3', { title: 'Demo 3' }, 'layout')
  }
}
