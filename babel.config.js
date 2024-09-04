// babel.config.js
module.exports = function(api) {
  api.cache(false);
  return {
    "env": {
      "development": {
        "presets": [
          "@babel/preset-env",
          "@babel/preset-react"
        ],
        "plugins": [
          "react-refresh/babel"
        ]
      },
      "production": {
        "presets": [
          [
            "@babel/preset-env",
            {
              "modules": false,
              "targets": {
                "ie": 9
              },
              "useBuiltIns": "entry",
              "corejs": 3
            }
          ],
          "@babel/preset-react"
        ],
        "plugins": [
          "@babel/plugin-transform-react-constant-elements",
          "babel-plugin-transform-react-remove-prop-types"
        ]
      },
      "test": {
        "presets": [
          "@babel/preset-env",
          "@babel/preset-react"
        ]
      }
    }
  };
};
