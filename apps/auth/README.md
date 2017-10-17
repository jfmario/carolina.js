
# Carolina Authentication #

The authentication app provides a way for users to register, login,
change their passwords, set an image, and register their e-mail address.

## Name and Mount Points #

Carolina Authentication must be mounted at `/admin` and should be named
`carolinaAuthenticationApp`.

## Data Options #

You can set this app's data options in accordance with the following table.

| Options | Default | Description |
| --- | --- | -- |
| `bootswatchTheme` | `lumen` | Any Bootswatch 4 theme to style the page. |
| `emailVerificationSubject` | `"Carolina Account Verification"` | The subject line of e-mails asking users to verify their e-mail address. |
| `emailVerificationText` | `"Click on the link below to verify your e-mail."` | The text of e-mails asking users to verify their e-mail address. It will be followed by a verification link. |
| `passwordResetSubject` | `"Carolina Account Password Reset"` | The subject line of e-mails inviting users to reser their password. |
| `passwordResetText` | `"Your new password is below:"` | The text of e-mails inviting users to reser their password. It will be followed by a temporary password. |

## Models #

### `User` #

`carolina/apps/auth/models/user`

**Fields**

| Field | Type |
| --- | --- |
| `username` (Index Field) | `StringField` |
| `password` | `HashedField` |
| `emailAddress` | `StringField` |
| `emailToken` | `StringField` |
| `emailTokenExpiration` | `DateField` |
| `emailVerified` | `BooleanField` |
| `groups` | `ListField` |
| `image` | `StringField` |
| `bio` | `StringField` |
| `token` | `StringField` |
| `tokenExpiration` | `DateField` |

**Methods**

| Signature | Description |
| --- | --- |
| `checkToken(token)` | Returns true if `token` is the user's current and valid token. Otherwise false. |
| `checkEmailToken(token)` | Returns true if `token` is the user's current and valid e-mail token. Otherwise false. |
| `createToken()` | Creates a new token, assigns it and sets an expiration date, and returns the token. |

## Middleware #

The Carolina Auth app provides 2 guards that will return errors with JSON
messages if the user is not properly logged in.

### AdminGuard #

```js
router.use(require('./lib/middleware/adminguard'));
router.post('/endpoint', endpointRequiringAdmin);
```

All routes processed after this middleware will return a 401 error
unless the user is currently logged in to an account with admin
privileges.

**Response**

```json
{
  "error": "Not an admin account."
}
```

### AuthGuard #

```js
router.use(require('./lib/middleware/authguard'));
router.post('/endpoint', endpointRequiringLogin);
```

All routes processed after this middleware will return a 401 error
unless the user is currently logged in to an account.

**Responses**

*No Credentials*

```json
{
  "error": "Login required."
}
```

*Invalid Token*

```json
{
  "error": "Bad or expired token."
}
```
