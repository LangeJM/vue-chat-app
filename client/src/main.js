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
import { domain, clientId } from "./auth_config.json";

Vue.config.productionTip = false;

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO("http://localhost:5000")
    // vuex: {
    //   store,
    //   actionPrefix: "SOCKET_",
    //   mutationPrefix: "SOCKET_"
    // }
  })
);

Vue.use(Auth0Plugin, {
  domain,
  clientId,
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
