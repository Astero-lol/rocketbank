module.exports = {
    extends: [
        require.resolve('./eslint')
    ],
    parser: 'typescript-eslint-parser',
    plugins: [
        'typescript'
    ],
    root: true,
    settings: {
        'import/resolver': {
            'node': {
                'extensions': [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx'
                ]
            },
        }
    },
    rules: {
        'import/extensions': ['error', 'always', {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never'
        }],
        'global-require': 'off',
        'no-undef': 'off',
        'space-infix-ops': 'off',
        'object-shorthand': 'off',
        'no-multiple-empty-lines': ['error', {'max': 1}],
        'typescript/no-unused-vars': ['error'],
        'import/prefer-default-export': false,
        'react/jsx-filename-extension': false,
        'typescript/type-annotation-spacing': 'error',
        'typescript/no-array-constructor': 'error',
        'typescript/no-angle-bracket-type-assertion': 'error',
        'typescript/class-name-casing': 'error',
        'typescript/member-delimiter-style': 'error',
        'typescript/no-empty-interface': 'error',
        'import/no-extraneous-dependencies': ['error', {'devDependencies': ['**/*.test.{ts,tsx,js,jsx}']}]
    }
};