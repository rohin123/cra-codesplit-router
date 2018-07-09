require('ignore-styles');
require('url-loader');
require('file-loader');
require('babel-register')({
    ignore: [ /(node_modules)/ ],
    presets: ['es2015', "react", "stage-2"],
    plugins: [
        'syntax-dynamic-import',
        'dynamic-import-node',
        'react-loadable/babel'
    ]
});
require('./index');
