module.exports = {
	bracketSpacing: false,
	singleQuote: true,
	trailingComma: "es5",
	arrowParens: "avoid",
	tabWidth: 2,
	useTabs: true,
	semi: true,
	printWidth: 80,
	endOfLine: 'auto',
	overrides: [
		{
		  files: [".*", "*.json"],
		  options: { "parser": "json" }
		}
	  ],
	parser: "typescript"
};
