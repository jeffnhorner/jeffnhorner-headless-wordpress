module.exports = {
    "extends": "stylelint-config-recommended",
    'rules': {
        'block-no-empty': null,
        'color-no-invalid-hex': true,
        'comment-empty-line-before': [ 'always', {
            'ignore': [
                'stylelint-commands',
                'after-comment',
            ]
        }],
        'declaration-colon-space-after': 'always',
        'indentation': [4, {
        baseIndentLevel: 1,
        }],
        'max-empty-lines': 2,
        'rule-empty-line-before': [ 'always', {
            'except': ['first-nested'],
            'ignore': ['after-comment'],
        }],
        'unit-whitelist': ['em', 'rem', '%', 's', 'vh', 'vw', 'px', 'deg', 'ms'],
        'at-rule-no-unknown': [true, {
            'ignoreAtRules': [
                'extends',
                'apply',
                'tailwind',
                'components',
                'utilities',
                'screen',
            ],
        }],
        'selector-pseudo-class-no-unknown': [true, {
            'ignorePseudoClasses': ['global'],
        }],
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null,
    },
};