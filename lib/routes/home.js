module.exports = {
  method: 'GET',
  path: '/',
  handler: (_, h) => {
    return h.viewWithLayout('home', { title: 'HapiMix' })
  }
}
