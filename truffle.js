// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    dev: {
      host: "127.0.0.1", // AWS rinkeby node
      port: 7545, // AWS rinkeby node
      network_id: "*"
    }
  }
}
