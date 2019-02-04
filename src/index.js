import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router}  from 'react-router-dom';

import AppRouter from './Router/AppRouter'

ReactDOM.render(<Router>

    <AppRouter/>
</Router>, document.getElementById('root'));

serviceWorker.unregister();

 