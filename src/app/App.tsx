import React from "react";
import Button from "@mui/material/Button";
// import { RippleBadge } from "./MaterialTheme/styled";
import { Switch, Link, Route, useLocation } from "react-router-dom";
import HomePage from "./screens/homePage";
import ProductsPage from "./screens/productsPage";
import OrdersPage from "./screens/ordersPage";
import UserPage from "./screens/userPage";
import HomeNavbar from "./components/headers/HomeNavbar";
import OtherNavbar from "./components/headers/OtherNavbar";
import Footer from "./components/footer";
// @ts-ignore: Allow side-effect CSS import without type declarations
import "../css/app.css";
// @ts-ignore: Allow side-effect CSS import without type declarations
import '../css/navbar.css'
// @ts-ignore: Allow side-effect CSS import without type declarations
import '../css/footer.css'
import HelpPage from "./screens/helpPage";
import Test from "./screens/Test";


function App() {
  const location = useLocation();
  console.log('====================================');
  console.log(location);
  console.log('====================================');
  return (
    <>
      {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/">
          {/* <HomePage /> */}
          <Test />

        </Route>
      </Switch>
      <Footer />
    </>)
}



export default App;





