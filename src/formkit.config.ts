import { defaultConfig } from "@formkit/vue";
import { de, en, fr, it } from "@formkit/i18n";

import { generateClasses } from "@formkit/themes";
import { genesisIcons } from "@formkit/icons";
import genesis from "@formkit/themes/tailwindcss/genesis";
import type { FormKitClasses } from "@formkit/core";

import { createProPlugin, datepicker, mask } from "@formkit/pro";

// main.js or formkit.config.ts
const proPlugin = createProPlugin("fk-asdasd", {
  datepicker,
  mask,
});

export const formkitConfig = defaultConfig({
  locales: { de, fr, it, en },
  locale: "en",
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(genesis) as Record<
      string,
      FormKitClasses | string | Record<string, boolean>
    >,
  },
  plugins: [proPlugin],
});
