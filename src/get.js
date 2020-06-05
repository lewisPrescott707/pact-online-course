const { get } = require('axios')

module.exports = function () {
    return get(`http://localhost:1234/token/1234`)
}
