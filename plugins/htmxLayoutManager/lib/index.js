const HtmxLayoutManager = {
  name: 'htmxLayoutManager',
  version: '1.0.0',
  register: (server) => {
    // Check if Vision is registered
    if (!server.views) {
      throw new Error('You must register @hapi/vision before using htmxLayoutManager plugin')
    }

    const viewWithLayout = function (viewName, context = {}, layoutName = 'layout', viewOptions = {}) {
      const { headers } = this.request

      const actualLayoutName = headers['hx-request'] === 'true' ? `${layoutName}Partial` : layoutName

      return this.view(viewName, { ...context }, { layout: actualLayoutName, ...viewOptions })
    }

    server.decorate('toolkit', 'viewWithLayout', viewWithLayout)
  }
}

exports.plugin = HtmxLayoutManager
