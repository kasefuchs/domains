import { defineConfig, type Format, type LibConfig, type RslibConfig } from "@rslib/core";
import { pluginYaml } from "@rsbuild/plugin-yaml";

const formats: Format[] = ["esm", "cjs"];
const libConfig: Partial<LibConfig> = {
  dts: true,
  syntax: "es5",
};

// noinspection JSUnusedGlobalSymbols
export default defineConfig(
  (): RslibConfig => ({
    lib: formats.map(
      (format, index): LibConfig => ({
        ...libConfig,
        format,
        dts: libConfig?.dts && !index,
      }),
    ),
    plugins: [pluginYaml()],
  }),
);
