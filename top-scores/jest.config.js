module.exports = {
  testMatch: [
    "<rootDir>/**/?(*.)(spec|test).(js|ts)?(x)",
    "<rootDir>/**/?(*.)(spec|test).(js|ts)?(x)",
  ],
  reporters: process.env.CI ? undefined : ["jest-spec-reporter"],
  rootDir: ".",
  moduleFileExtensions: [
    "ts",
    "js",
  ],
  testEnvironment: "node",
};
