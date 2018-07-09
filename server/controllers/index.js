import express from "express";

import serverRenderer from '../middleware/renderer';
import configureStore from '../../src/store/configureStore';
import { setAsyncMessage } from '../../src/store/appReducer';

const router = express.Router();
const path = require("path");


const actionIndex = (req, res, next) => {
    console.log('actionIndex',req.url);
    const store = configureStore();

    store.dispatch(setAsyncMessage("Hi, I'm from server!"))
        .then(() => {
            serverRenderer(store)(req, res, next);
        });
};

router.get('/*',actionIndex);

export default router;
