module.exports = {
	extends: ['react-app', 'prettier'],
	root: true,
	ignorePatterns: [
		// '**/*.stories.tsx',
	],
	overrides: [
		{
			files: ['**/*.ts?(x)'],
			rules: {
				'@typescript-eslint/ban-types': 1,
				'@typescript-eslint/camelcase': 0,
				'@typescript-eslint/explicit-function-return-type': 0,
				'@typescript-eslint/explicit-module-boundary-types': 0,
				'@typescript-eslint/interface-name-prefix': 0,
				'@typescript-eslint/no-explicit-any': 0,
				'@typescript-eslint/prefer-as-const': 0,
				'import/no-anonymous-default-export': 0, // We export anonymous services.
				'react/no-unescaped-entities': 0, //
				'react/prop-types': 0, // I use typescript interfaces, we don't need this
				'react/react-in-jsx-scope': 0, // With our typescript version we don't need react to be explicitly declared in the scope
			},
		},
	],
};
