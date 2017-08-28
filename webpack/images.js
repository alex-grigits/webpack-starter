module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(png|jpg|svg)$/,
					loader: 'file-loader',
					options: {
						name: 'images/[name].[ext]'
					}
				}
			]
		}
	};
};
