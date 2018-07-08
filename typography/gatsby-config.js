module.exports = {
	siteMetadata: {
		title: 'Gatsby Typography.js example',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: 'src/typography.js',
			},
		},
	],
}
