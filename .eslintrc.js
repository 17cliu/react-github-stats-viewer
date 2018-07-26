// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        jest: true
    },
    extends: [
        'standard',
        'plugin:react/recommended'
    ],
    plugins: [
        'react',
        'import',
        'node',
        'promise'
    ],
    rules: {
        // 4 spaces for indent
        'indent': ['error', 4],
        // arrays look like: [1, 2, 3]
        'array-bracket-spacing': [2, 'never'],
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // spacing for properties
        'computed-property-spacing': 2,
        // require a trailing newline in all files
        'eol-last': 2,
        // allow async-await
        'generator-star-spacing': 0,
        // filter results in for-in loops to skip props in prototype chain
        'guard-for-in': 2,
        // prevent usage of default `console` (use custom logger)
        // 'no-console': 1,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // disallow changes to native objects
        'no-extend-native': 2,
        // no unnecessary fn binding
        'no-extra-bind': 2,
        // no `this` outside of classes or class-like objects
        'no-invalid-this': 2,
        // no multiline strings; concat them if need be
        'no-multi-str': 2,
        // allow `new Thing()`
        'no-new': 0,
        // don't use `String`, `Number`, `Boolean` w/ `new` operator
        'no-new-wrappers': 2,
        // throw `Error` instances only
        'no-throw-literal': 2,
        // no unnecessary concat of strings
        'no-useless-concat': 2,
        // use `let` or `const` instead of `var`
        'no-var': 2,
        // disallow `with`
        'no-with': 2,
        // prefer using `const` for vars that are not reassigned
        'prefer-const': ['error'],
        // prefer template strs instead of str concat
        'prefer-template': ['error'],
        // require semicolons
        'semi': ['error', 'always'],
        // require space before fn parentheses
        'space-before-function-paren': 2,

        // eslint-plugin-import
        // https://github.com/benmosher/eslint-plugin-import
        // adapted from https://github.com/xojs/xo/blob/master/config/plugins.js
        'import/default': 'error',
        'import/export': 'error',
        'import/extensions': ['error', {
            js: 'never',
            json: 'always',
            jsx: 'never'
        }],
        'import/first': 'error',
        'import/named': 'error',
        'import/namespace': ['error', { allowComputed: true }],
        'import/no-absolute-path': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/no-amd': 'error',
        'import/no-duplicates': 'error',
        // Enable this sometime in the future when Node.js has ES2015 module support
        // 'import/unambiguous': 'error',
        // enable this sometime in the future when Node.js has ES2015 module support
        // 'import/no-commonjs': 'error',
        // Looks useful, but too unstable at the moment
        // 'import/no-deprecated': 'error',
        'import/no-extraneous-dependencies': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-named-as-default': 'error',
        'import/no-unresolved': ['error', { commonjs: true }],
        'import/order': 'error',
        'import/prefer-default-export': 'error',
        'import/no-unassigned-import': ['error', {
            allow: ['babel-polyfill', '@babel/polyfill', 'babel-register', '@babel/register', '**/*.css']
        }],

        // eslint-plugin-node
        // https://github.com/mysticatea/eslint-plugin-node
        // adapted from https://github.com/xojs/xo/blob/master/config/plugins.js
        'node/no-unpublished-bin': 'error',
        'node/process-exit-as-throw': 'error',
        'node/no-deprecated-api': 'error',

        // eslint-plugin-promise
        // https://github.com/xjamundx/eslint-plugin-promise
        // adapted from https://github.com/xojs/xo/blob/master/config/plugins.js
        'promise/param-names': 'error',
        'promise/no-return-wrap': ['error', { allowReject: true }],
        'promise/no-return-in-finally': 'error'
    }
}
