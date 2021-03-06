const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin =  require('mini-css-extract-plugin');


module.exports  = (env,argv) => {
	return {
	   entry: './src/index.js',
	   output: {
		  path: path.join(__dirname, '/bundle'),
		  filename: 'index_bundle.js'
	   },
	   devServer: {
		  inline: true,
		  port: 8080
	   },
	   module: {
		  rules: [
			 {
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
				   presets: ['es2015', 'react']
				}
			 },{
					test: /\.(sa|sc|c)ss$/,
					use: ['style-loader', 'css-loader']
				}  
		  ]
	   },
	   plugins:[
		  new HtmlWebpackPlugin({
			 template: './public/index.html'
		  })
	   ]
	}
}