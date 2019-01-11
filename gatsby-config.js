module.exports = {
	siteMetadata: {
		title: 'Less Harm',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-wordpress',
			options: {
				// The base url to your WP site.
				baseUrl: 'api.less-harm.com',
				// WP.com sites set to true, WP.org set to false
				hostingWPCOM: false,
				// The protocol. This can be http or https.
				protocol: 'https',
				// Use 'Advanced Custom Fields' Wordpress plugin
				useACF: false,
				auth: {},
				// Set to true to debug endpoints on 'gatsby build'
				verboseOutput: true,
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Less Harm',
				short_name: 'LessHarm',
				start_url: '/',
				background_color: '#fff',
				theme_color: '#E5B9C5',
				display: 'standalone',
				icon: 'src/img/logo.svg', // This path is relative to the root of the site.
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-styled-components',
	],
};
