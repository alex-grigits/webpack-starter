const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	src: path.join(__dirname, 'src'),
	dist: path.join(__dirname, 'dist')
};

module.exports = {
	entry: {
		'index': PATHS.src + '/pages/index/index.js',
		'blog': PATHS.src + '/pages/blog/blog.js'
	},
	output: {
		path: PATHS.dist,
		filename: '[name].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			chunks: ['index'],
			template: PATHS.src + '/pages/index/index.pug'
		}),
		new HtmlWebpackPlugin({
			filename: 'blog.html',
			chunks: ['blog'],
			template: PATHS.src + '/pages/blog/blog.pug'
		})
	],
	module: {
		rules: [
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
					pretty: true
				}
			}
		]
	}
};
