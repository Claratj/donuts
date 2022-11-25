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
				'import/no-anonymous-default-export': 0, // Export anonymous services.
				'react/no-unescaped-entities': 0, //
				'react/prop-types': 0, // I use typescript interfaces.
				'react/react-in-jsx-scope': 0, // With this typescript version there is no need react to be explicitly declared in the scope.
			},
		},
	],
};
