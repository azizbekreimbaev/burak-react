import { Container, ListItemIcon, Menu, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { height, Stack } from "@mui/system";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import React, { useEffect, useState } from 'react'
import { CartItem } from "../../../lib/types/search";
import { useGlobals } from "../../hooks/useGlobals";
import { serverApi } from "../../../lib/config";
import { Logout } from "@mui/icons-material";


interface HomeNavbarProps {
    cartItems: CartItem[];
    onAdd: (item: CartItem) => void
    onRemove: (item: CartItem) => void
    onDelete: (item: CartItem) => void
    onDeleteAll: () => void
    setSignupOpen: (isOpen: boolean) => void
    setLoginOpen: (isOpen: boolean) => void
    handleLogoutClick: (e: React.MouseEvent<HTMLElement>) => void
    anchorEl: HTMLElement | null;
    handleCloseLogout: () => void;
    handleLogoutRequest: () => void
}

export default function HomeNavbar(props: HomeNavbarProps) {
    const { cartItems, onAdd, onRemove, onDelete, onDeleteAll, setLoginOpen, setSignupOpen, handleLogoutClick, anchorEl, handleCloseLogout, handleLogoutRequest } = props

    const { authMember } = useGlobals()

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
                        {authMember ? (
                            <Box className={"hover-line"}>
                                <NavLink activeClassName={"underline"} to="/orders">Orders</NavLink>
                            </Box>
                        )
                            : null}
                        {authMember ? (
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
                            onDeleteAll={onDeleteAll} />

                        {!authMember ? (
                            <Box>
                                <Button className="login-button" variant="contained" style={{ background: "#3776CC", color: "#f8f8ff" }} onClick={() => setLoginOpen(true)}>
                                    Login
                                </Button>
                            </Box>
                        ) : (<img style={{ width: "50px", height: "50px", borderRadius: "24px" }}
                            src={authMember.memberImage ? `${serverApi}/${authMember.memberImage}` : "/icons/default-user.svg"}
                            aria-haspopup={"true"}
                            onClick={handleLogoutClick}
                        />)}

                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={Boolean(anchorEl)}
                            onClose={handleCloseLogout}
                            onClick={handleCloseLogout}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem onClick={handleLogoutRequest}>
                                <ListItemIcon>
                                    <Logout fontSize="small" style={{ color: 'blue' }} />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>



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
                            {!authMember ? (
                                <Button variant="contained" className={"signup-button"} onClick={() => setSignupOpen(true)}>
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