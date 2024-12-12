module.exports = {
    parser: '@typescript-eslint/parser',  // Specifies the ESLint parser for TypeScript
    extends: [
      'eslint:recommended',  // Use the recommended ESLint rules
      'plugin:@typescript-eslint/recommended',  // Use the recommended rules from @typescript-eslint
    ],
    parserOptions: {
      ecmaVersion: 2020,  // Enable ECMAScript 2020 features
      sourceType: 'module',  // Allow using ES module imports
    },
    env: {
      browser: true,  // Define browser environment
      node: true,  // Define Node.js environment
      es2020: true,  // Enable ECMAScript 2020 features
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',  // Disable the rule to disallow the 'any' type
      'no-console': 'warn',  // Warn when console statements are used
      'prefer-const': 'warn',  // Warn to use `const` where applicable
      'no-var': 'error',  // Error if `var` is used instead of `let` or `const`
    },
  };
  