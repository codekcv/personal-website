module.exports = {
  extends: [
    "plugin:react/recommended",
    "standard",
    "next",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",

    // TypeScript
    "@typescript-eslint/consistent-type-imports": "error",

    // Misc
    "no-html-link-for-pages": "off",
  },
};
