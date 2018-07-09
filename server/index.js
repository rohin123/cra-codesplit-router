import express from 'express';
import Loadable from 'react-loadable';

import indexController from './controllers/index';

import path from 'path'

const PORT = 3000;

// initialize the application and create the routes
const app = express();

app.use(express.static(
    path.resolve(__dirname, '..', 'dist'),
    { maxAge: '30d',
      fallthrough:true,
      index:false},
));


app.use('/',
        (req,res,next)=>{console.log('indexController',req.url); next();},
        indexController);

//start the app
Loadable.preloadAll().then(() => {
    app.listen(PORT, (error) => {
      if (error) {
            return console.log('something bad happened', error);
        }

        console.log("listening on " + PORT + "...");
    });
});
