const util = require('util')
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy

function Strategy(options, verify) {
  options = options || {}
  options.authorizationURL = options.authorizationURL || 'https://streamlabs.com/api/v1.0/authorize'
  options.tokenURL = options.tokenURL || 'https://streamlabs.com/api/v1.0/token'

  OAuth2Strategy.call(this, options, verify)
  this.name = 'twitchalerts'
}

util.inherits(Strategy, OAuth2Strategy)

exports.Strategy = Strategy
