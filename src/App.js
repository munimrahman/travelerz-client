import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Packages from './components/Packages/Packages';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import Blogs from './components/Blogs/Blogs';
import PackageDetails from './components/PackageDetails/PackageDetails';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';
import OrderReceived from './components/OrderReceived/OrderReceived';
import Shop from './components/Shop/Shop';
import ProductDetails from './components/ProductDetails]/ProductDetails';
import AddProduct from './components/AddProduct/AddProduct';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddPackage from './components/AddPackage/AddPackage';
import MyOrders from './components/MyOrders/MyOrders';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import UpdateOrder from './components/UpdateOrder/UpdateOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/packages">
              <Packages></Packages>
            </Route>
            <Route exact path="/add-package">
              <AddPackage></AddPackage>
            </Route>
            <Route exact path="/package-details/:packageKey">
              <PackageDetails></PackageDetails>
            </Route>
            <Route exact path="/cart">
              <Cart></Cart>
            </Route>
            <Route exact path="/check-out">
              <CheckOut></CheckOut>
            </Route>
            <Route exact path="/order-received/:orderID">
              <OrderReceived></OrderReceived>
            </Route>
            <Route exact path="/shop">
              <Shop></Shop>
            </Route>
            <Route exact path="/product-details/:productID">
              <ProductDetails></ProductDetails>
            </Route>
            <Route exact path="/add-product">
              <AddProduct></AddProduct>
            </Route>
            <Route exact path="/my-orders">
              <MyOrders></MyOrders>
            </Route>
            <Route exact path="/manage-all-orders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route exact path="/update-order/:updateOrderId">
              <UpdateOrder></UpdateOrder>
            </Route>
            <Route exact path="/contact-us">
              <ContactUs></ContactUs>
            </Route>
            <PrivateRoute exact path="/about-us">
              <AboutUs></AboutUs>
            </PrivateRoute>
            <Route exact path="/sign-in">
              <SignIn></SignIn>
            </Route>
            <Route exact path="/sign-up">
              <SignUp></SignUp>
            </Route>
            <Route exact path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
