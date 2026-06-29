import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import { NavLink } from "react-router-dom";

export function HomeNavbar() {
    const authUser = null
    return (
        <div className="home-navbar">
            <Container sx={{ mt: "55px", height: "642px" }}>
                <Stack direction={"row"} sx={{
                    minWidth: "700px",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Box>
                        <NavLink to="/">
                            <img src="/icons/burak.svg" style={{ width: "125px", height: "30px" }}></img>
                        </NavLink>
                    </Box>
                    <Stack direction={"row"} sx={{
                        minWidth: "700px",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                        <Box className={"hover-line"}>
                            <NavLink activeClassName={"underline"} to="/">Home</NavLink>
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

                        {!authUser ? (
                            <Box>
                                <Button variant="contained" style={{ background: "#3776CC", color: "#f8f8ff" }}>
                                    Login
                                </Button>
                            </Box>
                        ) : (<img />)}
                    </Stack>

                    <Box>3</Box>
                </Stack>

            </Container>
        </div >
    )
}