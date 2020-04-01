module.exports = {
    name: "unit",
    displayName: "unit",
    collectCoverage: true,
    coverageDirectory: "<rootDir>/coverage/unit",
    coverageReporters: ["lcov", "html"],
    testMatch: ["<rootDir>/**/*.spec.js"],
    testEnvironment: "node"
  };