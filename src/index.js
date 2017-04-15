const util = require('util')
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy
const InternalOAuthError = require('passport-oauth').InternalOAuthError

function Strategy (options, verify) {
  options = options || {}
  options.authorizationURL = options.authorizationURL || 'https://streamlabs.com/api/v1.0/authorize'
  options.tokenURL = options.tokenURL || 'https://streamlabs.com/api/v1.0/token'
  options.response_type = 'code'

  OAuth2Strategy.call(this, options, verify)
  this.name = 'twitchalerts'
}

util.inherits(Strategy, OAuth2Strategy)

Strategy.prototype.userProfile = function (accessToken, done) {
  this._oauth2.get('https://streamlabs.com/api/v1.0/user', accessToken, function (err, body) {
    if (err) { return done(new InternalOAuthError('Cannot fetch user', err)) }
    try {

      const json = JSON.parse(body)
      const profile = Object.assign({
        provider: 'twitchalerts',
      }, json.twitch)

      done(null, profile)
    } catch (e) {
      done(e)
    }
  })
}

exports.Strategy = Strategy
