const util = require('util')
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy

function Strategy(options, verify) {
  options = options || {}
  options.authorizationURL = options.authorizationURL || 'https://twitchalerts.com/oauth/authorize'
  options.tokenURL = options.tokenURL || 'https://twitchalerts.com/api/v1.0/token'

  OAuth2Strategy.call(this, options, verify)
  this.name = 'twitchalerts'

  // this._oauth2.setAuthMethod('OAuth')
  // this._oauth2.useAuthorizationHeaderforGET(true)
}

util.inherits(Strategy, OAuth2Strategy)

exports.Strategy = Strategy
