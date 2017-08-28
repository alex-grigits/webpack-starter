const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const pug = require('./webpack/pug');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');

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
			filename: 'js/[name].js'
		},
		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['index', 'common'],
				template: PATHS.src + '/pages/index/index.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'blog.html',
				chunks: ['blog', 'common'],
				template: PATHS.src + '/pages/blog/blog.pug'
			}),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'common'
			})
		]
	},
	pug()
]);

module.exports = function(env) {
	if(env === 'production') {
		return merge([
			common,
			extractCSS(),
			uglifyJS()
		]);
	}
	if(env === 'development') {
		return merge([
			common,
			devserver(),
			sass(),
			css()
		]);
	}
};
