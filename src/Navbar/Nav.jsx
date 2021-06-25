import React from 'react'
import Signin from '../Auth/Signin';
import Signup from '../Auth/Signup';
import Cart from '../Cart/Cart';
import ProductView from '../SingleProductView/ProductView';
import Products from '../ProductCard/Product';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Nav() {

    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light shadow text-white fw-bold" style={{backgroundColor:'rgb(0, 163, 238)'}}>
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">ShopHere</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Hi Abhi!!!</a>
              </li>
            </ul>
            <ul class="m-0 p-0">
            <Link to="/mycart" style={{ textDecoration: 'none',color:'white' }}>
            <p class="p-0 m-0 me-4">
            <i className="fas fa-shopping-cart me-2 ms-2 text-white"></i>Cart
            </p>
            </Link>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
      <Switch>
          
          <Route path="/mycart">
            <Cart/>
          </Route>
    </Switch>
      </Router>
        )
}

export default Nav;
