
import Products from './Products' ;
import Payment from './Payment/Payment'
import Nav from './Navbar/Nav'
import Signup from './Auth/Signup';
function App() {
  return (
    <>
    <Nav/>
    <div>
      {/* <Signup/> */}
      <Products/>
      {/* <Cart/> */}
    </div>
    </>
  );
}

export default App;
