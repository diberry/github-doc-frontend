# Authentication

* Authentication provided by GitHub 0Auth app
* Redirects to `http://localhost:9000/api/callback`
* Server gets code then requests access Token
* Using access token, get profile of user
* Redirect back to client with user information `http://localhost:3000/callback?userName=${userProfile.name}`
* Routes - `home`=authenticated, `hello` is unauthenticated