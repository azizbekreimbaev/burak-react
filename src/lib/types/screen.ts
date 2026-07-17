
/** REACT APP STATE */

import { Member } from "./member";
import { Product } from "./product";

export interface AppRootState {
    homePage: HomePageState;
}

/** HOME PAGE */
export interface HomePageState {
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];
}


/** PRODUCTS PAGE */


/** ORDERS PAGE */