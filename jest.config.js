module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.{types,stories,styles,d}.{js,jsx,ts,tsx}",
    "!src/**/index.{js,jsx,ts,tsx}",
    "!<rootDir>/src/serviceWorker.js",
    "!<rootDir>/node_modules/",
  ],
  setupFilesAfterEnv: ["./jest.setup.js"],
};
