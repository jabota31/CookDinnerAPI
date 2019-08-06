module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		es6: true,
		node: true
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'standard'
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	rules: {
		'no-tabs': 'off',
		indent: ['error', 'tab'],
		camelcase: 'off',
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/indent': ['error', 'tab']
	}
}
