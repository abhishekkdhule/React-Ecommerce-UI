import Cart from './Cart/Cart';
import Products from './Products' ;
import Payment from './Payment/Payment'
import Nav from './Navbar/Nav'
import Signup from './Auth/Signup';
import Signin from './Auth/Signin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
