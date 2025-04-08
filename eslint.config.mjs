// @ts-check
import eslint from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["eslint.config.mjs"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins:[
      "nest"
    ],
    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "lf",
        },
      ],
      "nestjs/parse-int-pipe":"error",
      "nestjs/deprecated-api-modules":"error",
      "nestjs/use-dependency-injection":"error",
      "nestjs/use-validation-pipe":"error",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
);
