import Cart from './Cart/Cart';
import Products from './Products' ;
import Payment from './Payment/Payment'
import Nav from './Navbar/Nav'
import Signup from './Auth/Signup';
import Signin from './Auth/Signin';
import ProductView from './SingleProductView/ProductView';
import React,{ useReducer } from 'react';
import Profile from './Profile/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const initialAuth={
  initialToken:'unauthorized',
  isAuth:false
}

export const tokenContext=React.createContext()

const reducer=(state,action)=>{
    switch(action.type){
      case 'updateToken':
        return {initialToken:action.newToken,isAuth:action.isAuth}
      default:
        return state
    }
}

function App() {
  const[auth,dispatch] =useReducer(reducer,initialAuth)

  return (
    <>
    <Router>
    <tokenContext.Provider value={{authState:auth,tokenDispatch:dispatch}}>

    <Nav/>
    <Switch>
        <Route exact path="/">
              <Products/> 
        </Route>
       <Route path="/mycart">
              <Cart/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/signin">            
          <Signin/>
        </Route>
        <Route path="/profile">            
          <Profile/>
        </Route>
        <Route path="/product">
          <ProductView/>
        </Route>
        </Switch>
    </tokenContext.Provider>
    </Router>
    </>
  );
}

export default App;
