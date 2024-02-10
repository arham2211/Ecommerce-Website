import './responsive.css';
import Home from './routes/Home';
import About from './routes/About'
import Service from './routes/Service';
import Product from './routes/Product';
import Contact from './routes/Contact';
import Cart from './routes/Cart';
import Checkout from './routes/Checkout';
import ProductDetails from './routes/ProductDetails';
import React from 'react'
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header"
import './components/Header.css';
import NavBar from "./components/NavBar";
import './components/NavBar.css';
import Footer from "./components/Footer";
import './components/Footer.css';
import Subscribe from "./components/Subscribe";
import './components/Subscribe.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <NavBar />
        <Switch>

          <Route exact path="/" component={Home}></Route>

          <Route exact path="/about" component={About}></Route>

          <Route exact path="/service" component={Service}></Route>

          <Route exact path="/product" component={Product}></Route>

          <Route exact path="/contact" component={Contact}></Route>
          
          <Route exact path="/cart" component={Cart}></Route>

          <Route exact path="/checkout" component={Checkout}></Route>

          <Route exact path="/ProductDetails" component={ProductDetails}></Route>

        </Switch>
        <Subscribe />
        <Footer />

      </Router>

    </>
  );
}

export default App;
