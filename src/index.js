import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {RoutingIndex} from "./routing/RoutingIndex";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import CustomContextHelper from "./helpers/CustomContextHelper";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import { LazyMotion, domAnimation } from "framer-motion"


ReactDOM.render(
    <Provider store={store}>
        <LazyMotion features={domAnimation}>
        <React.StrictMode>
            <CustomContextHelper>
                <RoutingIndex/>
            </CustomContextHelper>
        </React.StrictMode>
        </LazyMotion>
    </Provider>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
