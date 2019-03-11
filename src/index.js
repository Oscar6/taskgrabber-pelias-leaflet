import React from 'react';
import ReactDOM from 'react-dom';
import BaseLayout from './components/BaseLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login/Login'
import * as serviceWorker from './serviceWorker';
import './App.scss'
import './Styles/styles.css'
//component imports
import App from './App';
import ClientPage from './components/ClientPage';
import Register from './Register/Register'
import Dashboard from './Dashboard/Dashboard'
import UserDashboard from './Dashboard/UserDashboard'
import DropDown from './components/DropDown';
// import OrderForm from './components/OrderForm';
import './Styles/App.css';
// import TestComponent from './components/TestComponent';


// const store = createStore(reducer);



ReactDOM.render(
    //   <Provider>
        <BrowserRouter>
        <BaseLayout>
        <Switch>
          <Route  exact path="/" component={App}/>
          <Route path="/clientpage" component={ClientPage} />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route path="/dashboard" component={ Dashboard } />
          <Route path="/userdashboard" component={ UserDashboard } />
          <Route path="/dropdown" component={ DropDown } />
        </Switch>
        </BaseLayout>
        </BrowserRouter>,
    //   </Provider>,
      document.getElementById('root')
    )

serviceWorker.unregister();