import "./App.css";
import Customization from "./Pages/Customization/Customization";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import ProductPage from "./Pages/ProductPage/ProductPage";
import ProductReview from "./Pages/ProductReview/ProductReview";
import VendorPannel from "./Pages/VendorPannel/VendorPannel";
import VendorProfile from "./Pages/VendorProfile/VendorProfile";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Favourite from "./Components/Favourite/Favourite";
import UserProfile from "./Components/UserProfile/UserProfile";
import ShipAddress from "./Components/UserProfile/ShipAddress";
import Register from "./Components/Register/Register";
import VendorResister from "./Components/VendorLogin/VendorResister";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/productpage">
            <ProductPage />
          </Route>
          <Route path="/productdetails">
            <ProductDetail />
          </Route>
          <Route path="/customizations">
            <Customization />
          </Route>
          <Route path="/productreview">
            <ProductReview />
          </Route>
          <Route path="/vendorprofile">
            <VendorProfile />
          </Route>
          <Route path="/vendorpannel">
            <VendorPannel />
          </Route>
          <Route path="/favourite">
            <Navbar />
            <Favourite />
            <Footer />
          </Route>
          <Route path="/vendorResister">
            <Navbar />
            <VendorResister />
          </Route>
          <Route path="/login">
            <Navbar />
            <Login />
          </Route>
          <Route path="/register">
            <Navbar />
            <Register />
          </Route>
          <Route path="/cart">
            <Navbar />
            <Cart />
            <Footer />
          </Route>
          <Route path="/userprofile/shipingaddress">
            <Navbar />
            <ShipAddress />
            <Footer />
          </Route>
          <Route path="/userprofile">
            <Navbar />
            <UserProfile />
            <Footer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
