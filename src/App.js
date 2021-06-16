
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
    <div>
      {/* <Cart/> */}
    </div>
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
    </Switch>
    </Router>
    </>
  );
}

export default App;
