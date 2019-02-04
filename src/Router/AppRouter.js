import React from 'react';
import {  Route } from 'react-router-dom';
import CustomerList from '../Customers/ListCustomers';
import AddCustomer from '../Customers/AddCustomer';
import Header from "../header";


const AppRouter = () => (
       <React.Fragment>
        <Header />
        <Route exact path="/" component={AddCustomer} />
        <Route path="/list-customers" component={CustomerList} />
        <Route path="/addcustomer" component={AddCustomer} />
        </React.Fragment>

);
export default AppRouter

