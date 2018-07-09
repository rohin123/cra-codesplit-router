import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Loadable from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux'
import { StaticRouter } from 'react-router'
import routes from '../../src/routeConfig'
import RoutesWithSubRoutes from '../../src/helpers/routeswithsubroutes'
import App from '../../src/App'
import { matchRoutes } from 'react-router-config'

// import our main App component

// import the manifest generated with the create-react-app build
import manifest from '../../dist/asset-manifest.json';
// function to extract js assets from the manifest
const extractAssets = (assets, chunks) => Object.keys(assets)
    .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
    .map(k => assets[k]);


const path = require("path");
const fs = require("fs");


export default (store) => (req, res, next) => {
  console.log('renderer start',req.url)
    // get the html file created with the create-react-app build
    const branch = matchRoutes(routes, req.url)
    console.log(branch)
    const filePath = path.resolve(__dirname, '..', '..', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }

        const modules = [];
        const context = {};
        console.log("renderer url",req.url,typeof req.url)
        // render the app as a string
        const html = ReactDOMServer.renderToString(
            <Loadable.Capture report={m => modules.push(m)}>
                <ReduxProvider store={store}>
                  <StaticRouter location={req.url} context={context}>
                    <div>
                      {routes.map((route)=><RoutesWithSubRoutes {...route}/>)}
                    </div>
                  </StaticRouter>
                </ReduxProvider>
            </Loadable.Capture>
        );

        console.log("renderer html",html)
        console.log("renderer context",context)
        // get the stringified state
        const reduxState = JSON.stringify(store.getState());

        console.log(modules)
        // map required assets to script tags
        const extraChunks = extractAssets(manifest, modules)
            .map(c => `<script type="text/javascript" src="/${c}"></script>`);

        const mainJs = `<script type="text/javascript" src="/${manifest['main.js']}"></script>`

        console.log(extraChunks)
        // now inject the rendered app into our html and send it to the client
        return res.send(
            htmlData
                // write the React app
                .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
                // write the string version of our state
                .replace('__REDUX_STATE__={}', `__REDUX_STATE__=${reduxState}`)
                // append the extra js assets
                .replace('</body>',mainJs + extraChunks.join('') + '</body>')
        );

    });
}
