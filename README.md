# Vue Chat App

This is a meant as a training exercise to better familiarize myself with Vue (currently 2.6.12).
The [auth0 sample apps](https://github.com/auth0-samples/auth0-vue-samples) were used as a starter with authentication.

## Missing features and fixes

- Currently the user object which is provided by Auth0 is committed to the on App.vue mount (lifecycle method) with the help of setTimeout(700). Needs to be changed to async/Promise based implementation (plus store actions I guess) or maybe can go without the store entirely.
- No api and db implementation yet, so there is no real data and interaction (In addition and later on needs websockets, Typescript (I guess optional), maybe full test suite?).
- Auth0 wrapper used is not 100% clear and shows unexpected behavior. Need to do more research into Auth0.
- Lastly, this is based on a Vue2 template. Eventually this should be converted to Vue3

## Project setup

Please note, this setup works with Node version 12.22.1!

```bash
npm install
```

Remember that for the node/express app in the [server folder](./server), whn you install packages locally (and not globally) you need to prefix every command with `npx`. This is true for Typescript (`npx tsc server.ts`) and Nodemon (`npx nodemon server.js`).

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
