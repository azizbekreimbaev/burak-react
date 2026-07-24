import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisements";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events"
//@ts-ignore
import "../../../css/home.css"

import { useDispatch } from 'react-redux'
import { Dispatch } from '@reduxjs/toolkit'
import { setNewDishes, setPopularDishes, setTopUsers } from './slice'
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import MemberService from "../../services/MemberService";
import { Member } from "../../../lib/types/member";

/** REDUX SLICE*/
const actionDispatch = (dispatch: Dispatch) => ({
    setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
    setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
    setTopUsers: (data: Member[]) => dispatch(setTopUsers(data))
})


export default function HomePage() {
    const { setPopularDishes, setNewDishes, setTopUsers } = actionDispatch(useDispatch())
    // Selector: Store => Data


    useEffect(() => {
        // BACKEND server data request => Data
        const product = new ProductService();

        product.getProducts({
            page: 1,
            limit: 4,
            order: "productViews",
            productCollection: ProductCollection.DISH
        })
            .then(
                (data) => {
                    console.log("data pssed here", data)
                    setPopularDishes(data)  //1
                }
            )
            .catch((err) => { console.log(err) });




        product.getProducts({
            page: 1,
            limit: 4,
            order: "createdAt",
            productCollection: ProductCollection.DISH
        })
            .then(
                (data) => {
                    console.log("data pssed here newDishes", data)
                    setNewDishes(data)
                }
            )
            .catch((err) => { console.log(err) })


        //MEMBER

        const member = new MemberService();

        member.getTopUsers()
            .then((data) => {
                setTopUsers(data)
            })
            .catch((err) => console.log(err))


    }, [])

    // console.log(process.env.REACT_APP_API_URL)


    return <div className={"homepage"} >
        <Statistics />
        <PopularDishes />
        <NewDishes />
        <Advertisement />
        <ActiveUsers />
        <Events />
    </div>;
}
