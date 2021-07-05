import React from 'react';
import Header from '../src/components/header/header.js';
import Categories from '../src/components/storefront/categories.js';
import Footer from '../src/components/footer/footer.js';
// for router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import cart route
import Cart from '../src/components/cart/order.js';

function App() {
  return (
    <Router>
    <>
    <Header/>
    <Switch>
      <Route exact path="/" />
      <Route  exact path="/cart" component={Cart} />
    </Switch>
    <Categories/> 
    <Footer/>
    </>
    </Router>
  )
}

export default App;
