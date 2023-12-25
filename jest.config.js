module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(axios)/)"
  ]
};
