module.exports = {
  "env": {
    "node": true,
    "es6": true,
    "mocha": true
  },
  "parserOptions": {
    "ecmaVersion": 8
  },
  "plugins": [
    "prettier"
  ],
  "rules": {
    "prettier/prettier": ["error", {
      "singleQuote": true,
    }],
    "no-plusplus": "off"
  },
  "extends": [
    "airbnb-base",
    "prettier"
  ]
}
