import { defineConfig } from "@rslib/core";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  lib: [
    {
      format: "umd",
      syntax: "es5",
      banner: {
        // language=JavaScript
        js: "var global = this;",
      },
    },
  ],
});
