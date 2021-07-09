import React,{useContext} from 'react'
import Signin from '../Auth/Signin';
import Signup from '../Auth/Signup';
import Cart from '../Cart/Cart';
import ProductView from '../SingleProductView/ProductView';
import Products from '../ProductCard/Product';
import { tokenContext } from '../App';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Nav() {
  const currentAuthState= useContext(tokenContext)
 
    const logout=()=>{
      const custAxios=axios.create({
        baseURL:"http://localhost:8000/",withCredentials: true,
    })
      custAxios.post('auth/logout/',{"req":"logout"})
      .then((response)=>{
        console.log(response)
        currentAuthState.tokenDispatch({type:"updateToken",newToken:"unauthorised",isAuth:false})
        window.location.replace("/");
      })
      .catch((e)=>console.log(e))
    }

    return (
      
        <nav className="navbar navbar-expand-lg navbar-light shadow text-white fw-bold" style={{backgroundColor:'rgb(0, 163, 238)'}}>
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/" href="#">ShopHere</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            </ul>
            <ul class="m-0 p-0">
            <Link to="/mycart" style={{ textDecoration: 'none',color:'white' }}>
            {
              currentAuthState.authState.isAuth ? 
              (
                <span className="nav-item" onClick={()=>logout()}>Logout</span>
              
              ):
              ( 
                <>
                <span className="nav-item ps-2">
                  <Link to="/signin" style={{ textDecoration: 'none',color:'white' }}>Login</Link>
                </span>
                <span className="nav-item ps-2">
                  <Link to="/signup" style={{ textDecoration: 'none',color:'white' }}>Signup</Link>
                </span>
                </>
              )
            } 
            
            <span class="p-0 m-0 me-4">
            <i className="fas fa-shopping-cart me-2 ms-2 text-white"></i>Cart
            </span>
            </Link>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
      
      
        )
}

export default Nav;
