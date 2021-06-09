
import Products from './Products' ;
import Payment from './Payment'
import Nav from './Nav'
import Cart from './Cart'
function App() {
  return (
    <>
    <Nav/>
    <h1 className="text-center"> Product </h1>
    <div>
      {/* <Products/> */}
      <Cart/>
    </div>
    </>
  );
}

export default App;
