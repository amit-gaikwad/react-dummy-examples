module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console": "warn",
        "react/react-in-jsx-scope" :"off",
       // "react/prop-types" :"off",
        "prettier/prettier": [
            "error",
            {
              endOfLine: "auto",
            },
          ],      
    },
    "ignorePatterns": [".eslintrc.js","**/*.test.js","reportWebVitals.js"],
};
