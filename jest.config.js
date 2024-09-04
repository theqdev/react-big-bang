// jest.config.js
module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tools/assetsTransformer.js",
    "\\.(css|scss|sass)$": "<rootDir>/tools/assetsTransformer.js"
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    url: "http://localhost"
  }
};
