# Vue Chat App

This is a meant as a training exercise to better familiarize myself with Vue (currently 2.6.12).
The [auth0 sample apps](https://github.com/auth0-samples/auth0-vue-samples) were used as a starter with authentication.

## Project setup

Please note, this setup works with Node version 12.22.1!

```bash
npm install
```

### Configuration

The project needs to be configured with your Auth0 domain and client ID in order for the authentication flow to work.

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.
3. Add your auth0 details as shown in `auth_config.json.example` in the root directory and rename the file to `auth_config.json`:

```json
{
  "domain": "<YOUR AUTH0 DOMAIN>",
  "clientId": "<YOUR AUTH0 CLIENT ID>"
}
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

## Deployment

### Compiles and minifies for production

```bash
npm run build
```

### Docker build

To build and run the Docker image, run `exec.sh`, or `exec.ps1` on Windows.

### Run your tests

```bash
npm run test
```

### Lints and fixes files

```bash
npm run lint
```


## License

This project is licensed under the MIT license. See the [LICENSE](../LICENSE) file for more info.
