# Vue Chat App

This is meant as a training exercise to better familiarize myself with Vue (currently 2.6.12) as Node, Express, Typescript, MongoDB.
The [auth0 sample apps](https://github.com/auth0-samples/auth0-vue-samples) were used as a starter with authentication.

## Missing features and fixes

- Currently the user object which is provided by Auth0 is committed to the on App.vue mount (lifecycle method) with the help of setTimeout(700). Needs to be changed to async/Promise based implementation (plus store actions I guess) or maybe can go without the store entirely.
- Auth0 wrapper used is not 100% clear and shows unexpected behavior. Need to do more research into Auth0.
- Api and DB implementation:
  - Since I am new to Typescript, there are long passages where there is no (or only weak) Typescript implementation.
  - I can't seem to get mongoose models/Schemas embedded in other models/ Schemas
  - Needs websockets implementation
  - Full test suite?
- Lastly, this is based on a Vue2 template. Eventually this should be converted to Vue3

## Project setup

Please note, this setup works with Node version 12.22.1!
In order to install all dependencies for the client and the server application, execute:

```bash
npm run installAll
```

Remember that for the node/express app in the [server folder](./server), when you install packages locally (and not globally) you need to prefix every command with `npx`. This is true for Typescript (`npx tsc server.ts`) and Nodemon (`npx nodemon server.js`).

### Configuration

## Auth0

The project needs to be configured with your Auth0 domain and client ID in order for the authentication flow to work.

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.
3. Add your auth0 details as shown in `example.env` in the client directory and rename the file to `.env`:

## MongoDB

This project uses MongoDB as database solution.

### Compiles and hot-reloads for development

## All below TBD

server from server dir:

```bash
npm start
```

client from client dir:

```bash
npm run serve
```

## Deployment

<!-- ### Compiles and minifies for production

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
``` -->

## License

This project is licensed under the MIT license. See the [LICENSE](../LICENSE) file for more info.
