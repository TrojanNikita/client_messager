/** @type {import('next').NextConfig} */


const withLess = require('next-with-less');

if (typeof require !== 'undefined') {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	require.extensions['.less'] = () => {};
}

module.exports = withLess({
	cssModules: true,
	lessLoaderOptions: {
		lessOptions: {
			javascriptEnabled: true,
		},
	},
})
