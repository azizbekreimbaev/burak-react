
/** REACT APP STATE */

import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

export interface AppRootState {
    homePage: HomePageState;
    productsPage: ProductsPageState;
    ordersPage: OrdersPageState;
}

/** HOME PAGE */
export interface HomePageState {
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];
}


/** PRODUCTS PAGE */
export interface ProductsPageState {
    restaurant: Member | null;
    chosenProduct: Product | null;
    products: Product[]
}

/** ORDERS PAGE */

export interface OrdersPageState {
    pausedOrders: Order[];
    processOrders: Order[];
    finishedOrders: Order[];
}