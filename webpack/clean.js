const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

// the path(s) that should be cleaned
// let pathsToClean = [
// 	'dist',
// 	'build'
// ]

// the clean options to use
const cleanOptions  = {
	// root:     path.resolve,
	exclude:  ['shared.js'],
	verbose:  true,
	dry:      false
}

module.exports = function(pathsToClean) {
	console.log(pathsToClean);
	return {
		plugins: [
			new CleanWebpackPlugin(pathsToClean, cleanOptions)
		]
	};
};
console.log(path.join(__dirname));
