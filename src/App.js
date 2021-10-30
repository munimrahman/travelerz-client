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

function App() {
  return (
    <div className="App">
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
          <Route exact path="/package-details">
            <PackageDetails></PackageDetails>
          </Route>
          <Route exact path="/cart">
            <Cart></Cart>
          </Route>
          <Route exact path="/check-out">
            <CheckOut></CheckOut>
          </Route>
          <Route exact path="/order-received">
            <OrderReceived></OrderReceived>
          </Route>
          <Route exact path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path="/product-details">
            <ProductDetails></ProductDetails>
          </Route>
          <Route exact path="/contact-us">
            <ContactUs></ContactUs>
          </Route>
          <Route exact path="/about-us">
            <AboutUs></AboutUs>
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
    </div>
  );
}

export default App;
