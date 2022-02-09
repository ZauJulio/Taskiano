let secureEnv = require('secure-env');

const enc_env = secureEnv({
  secret: process.env.SECURE_ENV,
});

module.exports = {
  reactStrictMode: true,
  env: {
    ...enc_env,
  },
};
