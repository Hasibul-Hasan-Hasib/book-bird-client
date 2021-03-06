import Home from './pages/home/Home/Home';
import NotFound from './pages/notFound/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookDetails from './pages/bookDetails/BookDetails/BookDetails'
import Cart from './pages/cart/Cart/Cart';
import Checkout from './pages/checkout/Checkout/Checkout';
import Shop from './pages/shop/Shop/Shop'
import Login from './pages/login/Login'
import AuthContext from './contexts/AuthContext';
import CartContext from './contexts/CartContext';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <>
      <AuthContext>
        <CartContext>
          <Router>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path='/books/:id' element={<BookDetails />} />
              <Route path='/cart' element={<Cart />}></Route>
              <Route element={<PrivateRoute />}>
                <Route path='/checkout' element={<Checkout />} />
              </Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path="/category/:categoryName" element={<Shop />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </Router>
        </CartContext>
      </AuthContext>
    </>
  );
}

export default App;
