**_This is WIP!!!_**

# Vue Chat App

This is meant as a training exercise to better familiarize myself with Vue (currently 2.6.12) as Node, Express, Typescript, MongoDB.
The [auth0 sample apps](https://github.com/auth0-samples/auth0-vue-samples) were used as a starter with authentication.

## Missing features and fixes

- Auth0 wrapper used is not 100% clear and shows unexpected behavior. Need to do more research into Auth0.
- Api and DB implementation:
  - Since I am new to Typescript, there are long passages where there is no (or only weak) Typescript implementation.
  - I can't seem to get mongoose models/Schemas embedded in other models/ Schemas (could import schemas as javascript objects and use them within controllers)
  - Websockets implementation needs refactoring (e.g. websocket code needs its own module, triggering of new user event by lifecycle hook "created" is not efficient (fires too often)...)
  - Needs (auth0) protected routes (client requests to server)
  - Full test suite?
- Lastly, this is based on a Vue2 template. Eventually this should be converted to Vue3

## Project setup

Please note, this setup works with Node version 12.22.1!

To install both client and server make sure you have the [concurrently library](https://www.npmjs.com/package/concurrently) installed and from the project root directory run:

```bash
npm run installDev
```

As a general side note, when you install packages locally (and not globally) you need to prefix every command with `npx`, e.g. here for Typescript (`npx tsc server.ts`) and for Nodemon (`npx nodemon server.js`).

## Configuration

### Auth0

The project needs to be configured with your Auth0 domain, client ID and audience in order for the authentication flow to work.

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.
3. Add your auth0 details as shown in `example.auth_config.json` in the root directory and rename the file to `auth_config.json`. Make sure to .gitignore this file since it contains sensitive information.

### MongoDB

This project uses MongoDB (with Mongoose) as database solution.
The configuration of the Mongo URI needs to be placed in the .env file in the server folder. Refer to `example.env`.

## Run App

To start both client and server, from the project root directory run (again needs [concurrently library](https://www.npmjs.com/package/concurrently)):

```bash
npm run dev
```

<!-- ## Deployment -->

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
