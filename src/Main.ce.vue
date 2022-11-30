<script lang="ts">
import App from "./App.vue";
import { defineCustomElement, createApp, h, getCurrentInstance } from "vue";

import { plugin as formkit } from "@formkit/vue";
import { formkitConfig } from "./formkit.config";

import styles from "./assets/style.css?inline";
import pro from "./../node_modules/@formkit/pro/genesis.css?inline";

export default defineCustomElement({
  styles: [
    `
      :host {
        all: initial;
        display: block;
      }
    `,
    styles,
    pro,
  ],
  setup() {
    const app = createApp(App);

    app.use(formkit, formkitConfig);

    const inst = getCurrentInstance();
    if (inst) {
      Object.assign((inst as any).appContext, app._context);
      Object.assign((inst as any).provides, app._context.provides);
    }
  },
  render() {
    return h(App);
  },
});
</script>
