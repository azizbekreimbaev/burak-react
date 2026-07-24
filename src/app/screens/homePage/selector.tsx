import { createSelector } from 'reselect';
import { AppRootState } from '../../../lib/types/screen';

const selectHomePage = (state: AppRootState) => state.homePage;  //7

export const retrievePopularDishes = createSelector(selectHomePage, (HomePage) => HomePage.popularDishes) //8

export const retrieveNewDishes = createSelector(selectHomePage, (HomePage) => HomePage.newDishes)

export const retrieveTopUser = createSelector(selectHomePage, (HomePage) => HomePage.topUsers)