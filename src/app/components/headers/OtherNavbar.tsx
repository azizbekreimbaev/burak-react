import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { CartItem } from "../../../lib/types/search";

interface OtherNavbarProps {
    cartItems: CartItem[];
    onAdd: (item: CartItem) => void
    onRemove: (item: CartItem) => void
    onDelete: (item: CartItem) => void
    onDeleteAll: () => void
    setSignupOpen: (isOpen: boolean) => void
    setLoginOpen: (isOpen: boolean) => void
}


export default function OtherNavbar(props: OtherNavbarProps) {
    const { cartItems, onAdd, onRemove, onDelete, onDeleteAll, setLoginOpen, setSignupOpen } = props;
    const authUser = null
    return (
        <div className="other-navbar">
            <Container className="navbar-container">
                <Stack className="menu">
                    <Box>
                        <NavLink to="/">
                            <img className="brand-logo" src="/icons/burak.svg" style={{ width: "125px", height: "30px" }}></img>
                        </NavLink>
                    </Box>
                    <Stack className="links">
                        <Box className={"hover-line"}>
                            <NavLink activeClassName={"underline"} exact to="/">Home</NavLink>
                        </Box>
                        <Box className={"hover-line"}>
                            <NavLink activeClassName={"underline"} to="/products">Products</NavLink>
                        </Box>
                        {authUser ? (
                            <Box className={"hover-line"}>
                                <NavLink activeClassName={"underline"} to="/orders">Orders</NavLink>
                            </Box>
                        )
                            : null}
                        {authUser ? (
                            <Box className={"hover-line"}>
                                <NavLink activeClassName={"underline"} to="/member-page">My Page</NavLink>
                            </Box>
                        )
                            : null}
                        <Box className={"hover-line"}>
                            <NavLink activeClassName={"underline"} to="/help">Help</NavLink>
                        </Box>

                        {/* BASKET */}

                        <Basket cartItems={cartItems}
                            onAdd={onAdd}
                            onRemove={onRemove}
                            onDelete={onDelete}
                            onDeleteAll={onDeleteAll}

                        />

                        {!authUser ? (
                            <Box>
                                <Button className="login-button" variant="contained" style={{ background: "#3776CC", color: "#f8f8ff" }} onClick={() => setLoginOpen(true)}>
                                    Login
                                </Button>
                            </Box>
                        ) : (<img style={{ width: "50px", height: "50px", borderRadius: "24px" }}
                            src={"/icons/default-user.svg"}
                            aria-haspopup={"true"}
                        />)}
                    </Stack>


                </Stack>



            </Container>
        </div >
    )
}