module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  plugins: ['prettier', 'react', 'react-hooks', 'import'],

  rules: {
    'import/extensions': 0,
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': [0],
    'react/no-danger': 0,
    'global-require': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/sort-comp': [0],
    'react/jsx-props-no-spreading': [0],
    'react/jsx-one-expression-per-line': [0],
    'import/no-cycle': [1, { maxDepth: 1 }],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-wrap-multilines': [0],
    'react/no-array-index-key': 0,
    'no-param-reassign': [2, { props: false }],

    'jsx-a11y/anchor-is-valid': [0],

    'import/prefer-default-export': [0],

    'no-console': [
      'warn',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
  },

  settings: {
    'import/resolver': {
      node: {
        paths: ['src', '.'],
      },
    },
  },
};
