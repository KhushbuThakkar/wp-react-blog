// var webpack = require('webpack');
// var path	= require('path');

// module.exports = {
// 	 context: __dirname + '/src', // `__dirname` is root of project and `src` is source
// 	devtool: 'inline-source-map', // This will show line numbers where errors are accured in the terminal
// 	devServer: {
// 		historyApiFallback: true, // This will make the server understand "/some-link" routs instead of "/#/some-link"
// 	},
// 	entry: [
// 		'webpack-dev-server/client?http://127.0.0.1:8080/', // Specify the local server port
// 		'webpack/hot/only-dev-server', // Enable hot reloading
// 		'./src/index' // This is where Webpack will be looking for the entry index.js file
// 	],
// 	output: {
// 		path: path.join(__dirname, 'public'), // This is used to specify folder for producion bundle. Will not be used here, but it's a good practice to have it 
// 		filename: 'bundle.js' // Filename for production bundle
// 	},
// 	resolve: {
// 		//modulesDirectories: ['node_modules', 'src'], // Folders where Webpack is going to look for files to bundle together
// 		extensions: ['', '.js'] // Extensions that Webpack is going to expect
// 	},
// 	module: {
// 		// Loaders allow you to preprocess files as you require() or “load” them. Loaders are kind of like “tasks” in other build tools, and provide a powerful way to handle frontend build steps.
// 		loaders: [
// 			{
// 				test: /\.jsx?$/, // Here we're going to use JS for react components but including JSX in case this extension is preferable
// 				exclude: /node_modules/, // Speaks for itself
// 				loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'] // Modules that help with hot reloading and ES6 transcription	
// 			},
// 			{ test: /\.json$/, loader: "json" },
// 			{
// 		        test: /\.css$/,
// 		        loaders: [ 'style-loader', 'css-loader' ]
// 		    }
// 		]
// 	},
// 	plugins: [
// 		new webpack.HotModuleReplacementPlugin(), // Hot reloading
// 		new webpack.NoErrorsPlugin() // Webpack will let you know if there are any errors
// 	]
// }

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
		historyApiFallback: true, // This will make the server understand "/some-link" routs instead of "/#/some-link"
	},
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080/', // Specify the local server port
	'webpack/hot/only-dev-server', // Enable hot reloading
	'./src/index' // This is where Webpack will be looking for the entry index.js file
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
	 rules: [
	        {
	          test: /\.js?$/,
	          loader: 'babel-loader',
	          exclude: path.resolve(__dirname, 'node_modules/'),
	          query: {
	            presets: ['react', 'es2015'],
	          }
	        },
	        {
	          test: /\.scss$/,
	          loaders: ["style-loader", "css-loader", "sass-loader"]
	        },
	        { test: /\.css$/, loader: "style-loader!css-loader" },
	      ]
  }
};