import Vue from "vue";
import SocketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/store";
import { Auth0Plugin } from "./auth";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLink,
  faUser,
  faPowerOff,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { domain, clientId, audience } from "../../auth_config.json";
import AsyncComputed from "vue-async-computed";

Vue.config.productionTip = false;

Vue.use(AsyncComputed);

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO("http://localhost:5000")
  })
);

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

library.add(faLink, faUser, faPowerOff, faPaperPlane);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
