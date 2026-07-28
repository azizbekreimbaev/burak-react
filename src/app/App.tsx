import React, { useState } from "react";
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
import useBasket from "./hooks/useBasket";
import AuthenticationModal from "./components/auth";


function App() {
  const location = useLocation();
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket()
  const [signupOpen, setSignupOpen] = useState<boolean>(false)
  const [loginOpen, setLoginOpen] = useState<boolean>(false)

  /**HANDLERS */

  const handleSignupClose = () => {
    setSignupOpen(false)
  }
  const handleLoginClose = () => {
    setLoginOpen(false)
  }

  return (
    <>
      {location.pathname === "/" ?
        <HomeNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll} />
        :
        <OtherNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll} />}
      <Switch>
        <Route path="/products">
          <ProductsPage onAdd={onAdd} />
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
          <HomePage />
        </Route>
      </Switch>
      <Footer />

      <AuthenticationModal
        signupOpen={signupOpen}
        loginOpen={loginOpen}
        handleLoginClose={handleLoginClose}
        handleSignupClose={handleSignupClose}
      />

    </>)
}



export default App;





