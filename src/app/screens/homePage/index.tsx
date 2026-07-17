import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisements";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events"
//@ts-ignore
import "../../../css/home.css"

import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { setPopularDishes } from './slice'
import { retrievePopularDishes } from './selector'
import { Product } from "../../../lib/types/product";

/** REDUX SLICE and SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
    setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
})

const popularDishesRetriever = createSelector(retrievePopularDishes, (popularDishes) => ({ popularDishes }))

export default function HomePage() {
    const { setPopularDishes } = actionDispatch(useDispatch())
    const { popularDishes } = useSelector(popularDishesRetriever)
    // Selector: Store => Data


    useEffect(() => {
        // BACKEND server data request => Data

        // Slice: Data => Store
        // @ts-ignore

    }, [])



    return <div className={"homepage"} >
        <Statistics />
        <PopularDishes />
        <NewDishes />
        <Advertisement />
        <ActiveUsers />
        <Events />
    </div>;
}
