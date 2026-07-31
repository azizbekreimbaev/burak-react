import { createSlice } from '@reduxjs/toolkit'
import { OrdersPageState } from '../../../lib/types/screen';

const initialState: OrdersPageState = {
    pausedOrders: [], //4
    processOrders: [],
    finishedOrders: [],
};

const homePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        setPausedOrders: (state, action) => {
            state.pausedOrders = action.payload //3
        },

        setProcessOrders: (state, action) => {
            state.processOrders = action.payload
        },

        setFinishedOrders: (state, action) => {
            state.finishedOrders = action.payload
        },
    }
});

export const { setPausedOrders, setProcessOrders, setFinishedOrders } = homePageSlice.actions;

const OrdersPageReducer = homePageSlice.reducer;
export default OrdersPageReducer    //5