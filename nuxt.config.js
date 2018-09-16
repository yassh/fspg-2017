module.exports = {
  build: {
    babel: {
      presets: ["vue-app", "flow"],
    },
  },
  generate: {
    dir: "docs",
  },
  router: {
    base: "/fspg-2017/",
  },
}
