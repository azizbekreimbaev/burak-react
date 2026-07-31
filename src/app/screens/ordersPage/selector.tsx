import { createSelector } from 'reselect';
import { AppRootState } from '../../../lib/types/screen';

const selectOrdersPage = (state: AppRootState) => state.ordersPage;  //7

export const retrievePausedOrders = createSelector(
    selectOrdersPage, (OrdersPage) => OrdersPage.pausedOrders) //8

export const retrieveProcessOrders = createSelector(
    selectOrdersPage, (OrdersPage) => OrdersPage.processOrders)

export const retrieveFinishedOrders = createSelector(
    selectOrdersPage, (OrdersPage) => OrdersPage.finishedOrders)