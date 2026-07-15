import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { height, Stack } from "@mui/system";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";

export default function HomeNavbar() {
    const authUser = null

    // const [state, setstate] = useState(initialState)

    return (
        <div className="home-navbar">
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
                        <Basket />

                        {!authUser ? (
                            <Box>
                                <Button className="login-button" variant="contained" style={{ background: "#3776CC", color: "#f8f8ff" }}>
                                    Login
                                </Button>
                            </Box>
                        ) : (<img style={{ width: "50px", height: "50px", borderRadius: "24px" }}
                            src={"/icons/default-user.svg"}
                            aria-haspopup={"true"}
                        />)}
                    </Stack>


                </Stack>


                <Stack className={"header-frame"}>
                    <Stack className={"detail"}>
                        <Box className={"head-main-txt"}>
                            World's The Most Delicious Cousine
                        </Box>
                        <Box className={"wel-txt"}>
                            The Choice, not just a Choice
                        </Box>
                        <Box className={"service-txt"}>
                            24 hours Service
                        </Box>

                        <Box className={"signup"}>
                            {!authUser ? (
                                <Button variant="contained" className={"signup-button"}>
                                    Sign Up
                                </Button>
                            ) : null}
                        </Box>
                    </Stack>

                    <Box className={"logo-frame"}>
                        <div className="logo-img">

                        </div>
                    </Box>

                </Stack>

            </Container>
        </div >
    )
}