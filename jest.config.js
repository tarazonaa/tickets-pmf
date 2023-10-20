/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  setupFilesAfterEnv: ["./jest.setup.ts"],
   preset: "ts-jest",
   testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: [
      "node_modules/(?!(node-fetch)/)"
    ]
}
