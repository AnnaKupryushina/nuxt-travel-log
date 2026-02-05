import antfu from "@antfu/eslint-config";

// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  antfu(
    {
      formatters: true,
      stylistic: {
        indent: 2,
        quotes: "double",
        semi: true,
      },
      type: "app",
      typescript: true,
      vue: true,
    },
    {
      rules: {
        "antfu/no-top-level-await": ["off"],
        "no-console": ["warn"],
        "node/no-process-env": ["error"],
        "node/prefer-global/process": ["off"],
        "perfectionist/sort-imports": [
          "error",
          {
            tsconfig: { rootDir: "." },
          },
        ],
        "perfectionist/sort-objects": "error",
        "ts/consistent-type-definitions": ["error", "type"],
        "ts/no-redeclare": "off",
        "unicorn/filename-case": [
          "error",
          {
            case: "kebabCase",
            ignore: ["README.md"],
          },
        ],
      },
    },
  ),
);
