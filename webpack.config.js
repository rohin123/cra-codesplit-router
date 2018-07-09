const WebpackAssetsManifest = require('webpack-assets-manifest');
var path = require('path')
const CLIENT_DIR = path.resolve(__dirname,"./src")
const SERVER_DIR = path.resolve(__dirname,"./server")
const DIST_DIR = path.resolve(__dirname,"./dist")

const transform = {
rules : [{
    test:/.jsx?$/,
    exclude:/node_modules/,
    use:{
      loader:"babel-loader"
    }
  },{
    test:/.scss$/,
    exclude:/node_modules/,
    use:["style-loader","css-loader","scss-loader"]
  },{
    test:/.css$/,
    exclude:/node_modules/,
    use:["style-loader","css-loader"]
  },{
    test:/.svg$/,
    exclude:/node_modules/,
    use: 'file-loader'
  }]
}

module.exports = {
  name:'client',
  context:CLIENT_DIR,
  entry:'./index.js',
  output:{
    path:DIST_DIR,
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js'
  },
  target:"web",
  module:transform,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins:[
    new WebpackAssetsManifest({
      output:path.join(__dirname,'dist','asset-manifest.json')
    })
  ]
}
