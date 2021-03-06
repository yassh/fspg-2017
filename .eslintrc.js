const OFF = 0 // eslint-disable-line no-unused-vars
const WARN = 1 // eslint-disable-line no-unused-vars
const ERROR = 2 // eslint-disable-line no-unused-vars

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    "jest/globals": true,
  },
  extends: ["standard", "prettier", "plugin:vue/recommended", "plugin:jest/recommended"],
  plugins: ["prettier", "flowtype", "jest"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "prettier/prettier": ERROR,
    "vue/max-attributes-per-line": OFF,
    "vue/html-self-closing": [
      ERROR,
      {
        html: {
          void: "always",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/singleline-html-element-content-newline": [ERROR, { ignoreWhenNoAttributes: false }],
  },
}
