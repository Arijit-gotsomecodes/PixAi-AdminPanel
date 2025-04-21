'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/aimodel',
      handler: 'aimodel.generateImage',
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
  ],
};