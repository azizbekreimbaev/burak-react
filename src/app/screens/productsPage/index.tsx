import { Route, Switch, useRouteMatch } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";
//@ts-ignore
import "../../../css/products.css";
import { CartItem } from "../../../lib/types/search";
import useBasket from "../../hooks/useBasket";

// interface ProductsPageProps {
//     onAdd: (item: CartItem) => void
// }

export default function ProductsPage() {


    const products = useRouteMatch();
    console.log("products:", products);

    return (
        <div className={"products-page"}>
            <Switch>
                <Route path={`${products.path}/:productId`}>
                    <ChosenProduct />
                </Route>
                <Route path={`${products.path}`}>
                    <Products />
                </Route>
            </Switch>
        </div>
    );
}
