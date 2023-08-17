const Joi = require('joi')

const users = []

module.exports = {
  method: 'POST',
  path: '/users',
  options: {
    validate: {
      payload: Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required()
      })
    }
  },
  handler: (request, h) => {
    const { payload } = request
    users.push({ firstName: payload.firstName, lastName: payload.lastName })
    return h.viewWithLayout('demo1', { title: 'Demo 1', users })
  }
}
