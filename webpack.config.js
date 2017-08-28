const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const pug = require('./webpack/pug');

const PATHS = {
	src: path.join(__dirname, 'src'),
	dist: path.join(__dirname, 'dist')
};

const common = merge([
	{
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
		]
	},
	pug()
]);

module.exports = function(env) {
	if(env === 'production') {
		return common;
	}
	if(env === 'development') {
		return merge([
			common,
			devserver()
		]);
	}
};
