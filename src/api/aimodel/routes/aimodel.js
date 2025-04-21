// src/api/aimodel/routes/aimodel.js
module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/aimodel',
        handler: 'aimodel.generateImage',
        config: {
          auth: false, // Set to true if you want to require authentication
        }
      }
    ]
  };