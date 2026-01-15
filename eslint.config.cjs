const js = require("@eslint/js");
const docusaurus = require("@docusaurus/eslint-plugin");
const mdx = require("eslint-plugin-mdx");
const prettierPlugin = require("eslint-plugin-prettier");
const prettierConfig = require("eslint-config-prettier");
const typescriptEslint = require("typescript-eslint");

module.exports = [
  js.configs.recommended,
  ...typescriptEslint.configs.recommended.map(config => ({ ...config, files: ['**/*.{ts,tsx}']})),
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptEslint.parser,
      parserOptions: {
        project: true,
      },
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx,md,mdx}"],
    plugins: {
      "@docusaurus": docusaurus,
      "prettier": prettierPlugin,
    },
    rules: {
      ...docusaurus.configs.recommended.rules,
      "prettier/prettier": "error",
    },
  },
  {
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: false,
    }),
  },
  prettierConfig,
  {
    ignores: [".docusaurus/", "build/", "node_modules/"],
  },
];