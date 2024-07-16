# maple-register-api

## Installation

1. download nodejs https://nodejs.org/en

2. After installing nodejs, run these on the root folder of the project:
```
npm i
```

3. edit the database settings in `config/config.json`

4. Set your reCAPTCHA token in `config/config.json` (or disable it entirely by removing it from `controllers/authController.js`)

## Starting

```
npm run start
```

The api server should now run on port 3000

## Testing

Testing without a site can be difficult with the reCAPTCHA validation present.

A curl request without token (Edit `controllers/authController.js` to disable the token):
```curl
curl -X POST http://localhost:3000/api/auth/register -H "Content-Type: application/json" -d '{"name":"admin", "password":"password"}'
```