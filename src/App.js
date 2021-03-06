import React from 'react';
import Header from '../src/components/header/header.js';
import SimpleCart  from '../src/components/cart/simplecart.js'
import Categories from '../src/components/storefront/categories.js';
import Products from '../src/components/storefront/products.js';
import ViewDetails from '../src/components/products/details.js'
import CurrentCat from '../src/components/storefront/current-category';
import Footer from '../src/components/footer/footer.js';
// for router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import cart route
import Cart from '../src/components/cart/ShoppingCart.js';

function App() {
  return (
    <Router>
    <>
    <Header/>
    <SimpleCart/>
    <Switch>
      <Route exact path="/"  >
    <Categories/> 
    <CurrentCat/>
    <Products/> 
      </Route>
      <Route  exact path="/cart" component={Cart} />
      <Route  exact path="/detail/:id" component={ViewDetails} />
    </Switch>
    <Footer/>
    </>
    </Router>
  )
}

export default App;
