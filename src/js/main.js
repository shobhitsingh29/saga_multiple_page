import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { default as myreducers } from "./reducers/statereducer.js";
import { logger, crashReporter } from "./middlewares/midlleware";


import "../css/styles.css";
import utils from "../js/common/utils";
import App from "./app";
import rootSaga from "./sagas/saga.js";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    state: myreducers
});
const store = createStore(reducers,
    applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

class Main extends React.Component {

    render(){
        return(
            <Provider store={store}>
            <App />
            </Provider>
        );
    }
}
ReactDOM.render(<Main />, document.getElementById("root"));