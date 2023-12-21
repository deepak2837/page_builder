module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react', 'prettier'], // react-refresh
  rules: {
    // 'react-refresh/only-export-components': [
    //   'warn',
    //   { allowConstantExport: true },
    // ],
    // 'prettier/prettier': ['error', { endOfLine: 'auto' }],
    // 'spaced-comment': 'off',
    // 'no-console': 'warn',
    // 'consistent-return': 'warn',
    // 'func-names': 'off',
    // 'object-shorthand': 'off',
    // 'no-process-exit': 'off',
    // 'no-param-reassign': 'off',
    // 'no-return-await': 'off',
    // 'no-underscore-dangle': 'off',
    // 'class-methods-use-this': 'off',
    // 'prefer-destructuring': ['error', { object: true, array: false }],
    'no-unused-vars': ['warn', { argsIgnorePattern: 'req|res|next|val' }],
  },
};
