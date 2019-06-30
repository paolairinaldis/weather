import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import rootReducer from './reducers/weaterReducer';
import {createStore, applyMiddleware} from 'redux';
import './index.css';

const store = createStore(rootReducer, applyMiddleware());
store.subscribe(() => console.log('storeWeather', store.getState()));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);