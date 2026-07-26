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
import { CartItem } from "../lib/types/search";


function App() {
  const location = useLocation();

  const cartJson: string | null = localStorage.getItem("cartData");
  const currentCart = cartJson ? JSON.parse(cartJson) : []
  const [cartItems, setCartItems] = useState<CartItem[]>(currentCart)

  //** HANDLERS */

  const onAdd = (input: CartItem) => {
    const exist: any = cartItems.find((item: CartItem) => {
      return item._id === input._id                            // cartItems bizda mavjud savat b-b items mavjud ichidagiu productrlar input kirgizmoqachi bolgan product
    });

    if (exist) {
      const cartUpdate = cartItems.map((item: CartItem) => {
        return item._id === input._id ? { ...exist, quantity: exist.quantity + 1 } : item
      });

      setCartItems(cartUpdate)
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));

    } else {
      const cartUpdate = [...cartItems, { ...input }];   // agar osha product savatchada bolmasa qoshmoqchi bolgan osha productni savatga qoshib yangi array beradi 
      setCartItems(cartUpdate);

      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }
  }


  return (
    <>
      {location.pathname === "/" ? <HomeNavbar cartItems={cartItems} /> : <OtherNavbar cartItems={cartItems} />}
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
    </>)
}



export default App;





