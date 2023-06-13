import React from 'react'
import App from './App';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import 'antd/dist/antd';
import{Provider} from 'react-redux';
import  store from './app/store';
ReactDOM.render(
<Router>
    <Provider store={store}>
    <App/>  
    </Provider>

</Router>,
document.getElementById('root'));