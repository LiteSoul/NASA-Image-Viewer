// http://eslint.org/docs/user-guide/configuring
module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	// 'html' required to lint *.vue files
	plugins: ['html', 'prettier'],
	extends: ['eslint:recommended', 'prettier'],
	parserOptions: {
		sourceType: 'module'
	},
	// add your custom rules here
	rules: {
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'windows'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'prettier/prettier': [
			'error',
			{ singleQuote: true, useTabs: true, semi: false }
		]
	}
}
