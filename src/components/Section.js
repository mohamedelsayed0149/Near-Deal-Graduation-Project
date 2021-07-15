import React from "react";
import Products from "./section/Products";
import Details from "./section/Details";
import { Route } from "react-router-dom";
import Cart from "./section/Cart";
import Payment from "./section/Payment";
import Shops from "./section/Shops";
import Home from "./section/Home";
import About from './section/About';

function Section() {
  return (
    <section>
      <Route path="/" component={Home} exact />
      <Route path="/products" component={Products} exact />
      <Route path="/products/:id" component={Details} exact />
      <Route path="/payment" component={Cart} exact />
      <Route path="/cart" component={Payment} exact />
      <Route path="/shops" component={Shops} exact />
      <Route path="/about" component={About} exact />
    </section>
  );
}

export default Section;
