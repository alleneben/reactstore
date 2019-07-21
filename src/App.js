import React from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/ecom/navbar';
import ProductList from './components/ecom/productlist';
import Details from './components/ecom/details';
import Cart from './components/ecom/cart/';
import Default from './components/ecom/default';
import Modal from './components/ecom/modal';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
