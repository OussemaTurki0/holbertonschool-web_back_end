module.exports = [
    {
      files: ["*.js"],
      rules: {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module"
      },
      env: {
        es6: true,
        node: true
      }
    }
  ];
  