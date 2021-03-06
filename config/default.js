const appVersion = require('../package.json').version;

module.exports = {
  version: appVersion,
  port: process.env.PORT || 3333,
  mongoose: {
    uri: 'mongodb://localhost/ts_express_dev',
    options: {
      server: {
        socketOptions: {
          keepAlive: 1,
        },
        poolSize: 5,
      },
    },
  },
}
