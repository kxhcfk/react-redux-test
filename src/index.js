import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";


/* import { createStore } from 'redux';

/!* action = {
	type: string,
	action: object,
} *!/

const defaultState = {
	cash: 0,
};

const cashReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'ADD_CASH':
			return {
				...state,
				cash: state.cash + action.payload,
			};
		case 'GET_CASH':
			return {
				...state,
				cash: state.cash - action.payload,
			};
		default:
			return state;
	}
};

const customerReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'ADD_CUSTOMER':
			return {
				...state,
				cash: state.cash + action.payload,
			};
		case 'GET_CUSTOMERS':
			return {
				...state,
				cash: state.cash - action.payload,
			};
		default:
			return state;
	}
};

const store = createStore(reducer); */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>,
);