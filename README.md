# passport-twitchalerts

> Passport strategy for OAuth 2.0 authentication with TwitchAlerts

    npm i -S passport-twitchalerts

## Usage

As stated in the [OAuth docs](https://twitchalerts.readme.io/docs/oauth-2), access tokens expires after 60 minutes,
and you'll need to regenerate one using the provided refresh token if you need to authenticate requests past this date.

Since TwitchAlerts doesn't provide an endpoint to get basic user informations, the profile variable will always be an empty object. The only way to identify a user resides in the `refreshToken`.

A `scope` is required, all scopes are [available here](https://twitchalerts.readme.io/docs/scopes).

```js
passport.use(new TwitchAlertStrategy({
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callbackURL: 'http://127.0.0.1:3000/auth/callback',
  scope: ['donations.create', 'alerts.create']
}, function (accessToken, refreshToken, profile, done) {
  done(null, true)
}))
```

#### Authentication

Use `passport.authenticate()`, specifying the `twitchalerts` strategy, to authenticate requests.

```js
app.get('/auth', passport.authenticate('twitchalerts'))

app.get('/callback', passport.authenticate('twitchalerts', { failureRedirect: '/' }), function (req, res) {
  res.redirect('/')
})
```
