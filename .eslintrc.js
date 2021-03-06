module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: '@babel/eslint-parser'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-extra-parens': [
            'warn',
            'all',
            {
                nestedBinaryExpressions: false,
                ignoreJSX: 'all'
            }
        ],
        'no-loss-of-precision': 'warn',
        'no-promise-executor-return': 'warn',
        // Best Practices
        'array-callback-return': 'warn',
        'class-methods-use-this': 'warn',
        curly: ['warn', 'all'],
        'max-classes-per-file': ['warn', 1],
        'no-alert': 'warn',
        'no-constructor-return': 'warn',
        'no-empty-function': 'warn',
        'no-eq-null': 'warn',
        'no-eval': 'warn',
        'no-extend-native': 'warn',
        'no-else-return': 'warn',
        'no-extra-bind': 'warn',
        'no-extra-label': 'warn',
        'no-implicit-coercion': 'warn',
        'no-implicit-globals': 'warn',
        'no-implied-eval': 'warn',
        'no-invalid-this': 'warn',
        'no-labels': 'warn',
        'no-lone-blocks': 'warn',
        // "no-loop-func": "warn",
        // "no-magic-numbers": [
        //     "warn",
        //     {
        //         "ignoreArrayIndexes": true,
        //         "enforceConst": true
        //     }
        // ],
        'no-multi-spaces': 'warn',
        'no-new': 'warn',
        'no-new-func': 'warn',
        'no-new-wrappers': 'warn',
        'no-return-await': 'warn',
        'no-self-compare': 'warn',
        'no-unused-expressions': ['warn', {allowTernary: true}],
        'no-useless-call': 'warn',
        'no-useless-concat': 'warn',
        'no-useless-return': 'warn',
        'no-void': 'warn',
        radix: 'warn',
        'require-await': 'warn',
        'wrap-iife': ['warn', 'inside'],
        // Variables
        'no-label-var': 'warn',
        'no-undef-init': 'warn',
        'no-use-before-define': ['warn', {functions: false, classes: false}],
        // Stylistic Issues
        'array-bracket-newline': ['warn', 'consistent'],
        'array-bracket-spacing': ['warn', 'never'],
        'array-element-newline': ['error', 'consistent'],
        'brace-style': ['warn', '1tbs'],
        // "camelcase": [
        //     "warn",
        //     {
        //         "properties": "never",
        //         "ignoreImports": true
        //     }
        // ],
        'comma-dangle': ['warn', 'only-multiline'],
        'comma-spacing': ['warn', {before: false, after: true}],
        'comma-style': ['warn', 'last'],
        'computed-property-spacing': ['warn', 'never'],
        'consistent-this': ['warn', 'self'],
        'eol-last': ['warn', 'always'],
        'func-call-spacing': ['warn', 'never'],
        'func-name-matching': 'warn',
        'func-style': ['warn', 'declaration', {allowArrowFunctions: true}],
        'function-call-argument-newline': ['warn', 'never'],
        'function-paren-newline': ['warn', 'multiline'],
        'implicit-arrow-linebreak': ['warn', 'beside'],
        indent: ['warn', 4],
        'jsx-quotes': ['warn', 'prefer-double'],
        'key-spacing': [
            'warn',
            {
                beforeColon: false,
                afterColon: true,
                mode: 'strict'
            }
        ],
        'keyword-spacing': ['warn', {before: true, after: true}],
        'linebreak-style': ['warn', 'unix'],
        // "lines-around-comment": [
        //     "warn",
        //     {
        //         "beforeBlockComment": true,
        //         "beforeLineComment": true,
        //         "allowBlockStart": true,
        //         "allowObjectStart": true,
        //         "allowArrayStart": true,
        //         "allowClassStart": true
        //     }
        // ],
        'lines-between-class-members': ['warn', 'always', {exceptAfterSingleLine: true}],
        'multiline-comment-style': ['warn', 'separate-lines'],
        'multiline-ternary': ['warn', 'always-multiline'],
        'new-cap': [
            'warn',
            {
                newIsCap: true,
                capIsNew: true,
                properties: false
            }
        ],
        'new-parens': ['warn', 'always'],
        'newline-per-chained-call': 'warn',
        'no-array-constructor': 'warn',
        'no-inline-comments': 'warn',
        'no-lonely-if': 'warn',
        'no-mixed-operators': 'warn',
        'no-multiple-empty-lines': ['warn', {max: 2, maxEOF: 0, maxBOF: 0}],
        'no-new-object': 'warn',
        'no-tabs': 'warn',
        'no-unneeded-ternary': 'warn',
        'no-whitespace-before-property': 'warn',
        'nonblock-statement-body-position': ['warn', 'beside'],
        'object-curly-newline': ['warn', {consistent: true}],
        'object-curly-spacing': ['warn', 'never'],
        'object-property-newline': ['warn', {allowAllPropertiesOnSameLine: true}],
        'one-var': ['warn', 'never'],
        'one-var-declaration-per-line': ['warn', 'initializations'],
        'operator-assignment': ['warn', 'always'],
        'padded-blocks': ['warn', 'never'],
        'quote-props': ['warn', 'as-needed'],
        quotes: ['warn', 'single'],
        semi: ['warn', 'always'],
        'semi-spacing': ['warn', {before: false, after: true}],
        'semi-style': ['warn', 'last'],
        'space-before-blocks': 'warn',
        'space-before-function-paren': [
            'warn',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'space-in-parens': ['warn', 'never'],
        'space-unary-ops': 'warn',
        'spaced-comment': ['warn', 'always', {exceptions: ['-+']}],
        'switch-colon-spacing': 'warn',
        // ECMAScript 6
        'arrow-body-style': ['warn', 'as-needed'],
        'arrow-parens': ['warn', 'as-needed'],
        'arrow-spacing': ['warn', {before: true, after: true}],
        'generator-star-spacing': [
            'warn',
            {
                before: false,
                after: true,
                anonymous: 'neither',
                method: {before: true, after: true}
            }
        ],
        'no-duplicate-imports': 'warn',
        'no-useless-computed-key': 'warn',
        'no-useless-constructor': 'warn',
        'no-useless-rename': 'warn',
        'no-var': 'error',
        'prefer-const': 'warn',
        'rest-spread-spacing': ['warn', 'never'],
        'template-curly-spacing': ['warn', 'never'],
        // Vue
        'vue/html-closing-bracket-newline': 'off',
        'vue/max-attributes-per-line': [
            'warn',
            {
                singleline: {
                    max: 1,
                },
                multiline: {
                    max: 1,
                }
            }
        ],
        'vue/html-self-closing': [
            'warn',
            {
                html: {
                    void: 'never',
                    normal: 'never',
                    component: 'always'
                },
                svg: 'always',
                math: 'always'
            }
        ],
        'vue/multiline-html-element-content-newline': [
            'warn',
            {
                ignoreWhenEmpty: true,
                allowEmptyLines: true
            }
        ],
        'vue/singleline-html-element-content-newline': [
            'warn',
            {
                ignoreWhenNoAttributes: false
            }
        ],
        'vue/attribute-hyphenation': [
            'warn',
            'always',
            {
                ignore: ['viewBox']
            }
        ],
        'vue/html-indent': [
            'warn',
            4,
            {
                baseIndent: 1,
                attribute: 1,
                alignAttributesVertically: true
            }
        ],
        'vue/script-indent': [
            'warn',
            4,
            {
                baseIndent: 1,
                switchCase: 1
            }
        ],
        'vue/no-v-html': 'off'
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
                'class-methods-use-this': 'off'
            }
        }
    ]
};
