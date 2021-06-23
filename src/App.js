import Cart from './Cart/Cart';
import Products from './Products' ;
import Payment from './Payment/Payment'
import Nav from './Navbar/Nav'
import Signup from './Auth/Signup';
import Signin from './Auth/Signin';
import React,{ useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const initialToken='random token'
export const tokenContext=React.createContext()
const reducer=(state,action)=>{
    switch(action.type){
      case 'updateToken':
        return action.newToken
      default:
        return state
    }
}

function App() {
  const[token,dispatch] =useReducer(reducer,initialToken)

  return (
    <>
    <tokenContext.Provider value={{tokenState:token,tokenDispatch:dispatch}}>

    <Nav/>
    <Router>
    <Switch>
          <Route exact path="/">
            <Products/> 
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/signin">
            
            <Signin/>
            
          </Route>
          <Route path="/mycart">
            <Cart/>
          </Route>
    </Switch>
    </Router>
    </tokenContext.Provider>
    </>
  );
}

export default App;
