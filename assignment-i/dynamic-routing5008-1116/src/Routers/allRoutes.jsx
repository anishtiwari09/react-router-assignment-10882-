import { Link, Route, Switch, useParams } from "react-router-dom";
import Home from "../pages/home";
import Product from "../pages/Product";
import { ProductInfo } from "../pages/ProductInfo.";

export default function AllRoutes() {
  //console.log(id);
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
        <Route exact path="/product/:id">
          <ProductInfo />
        </Route>
        <Route>
          <h3>Page:Not Found</h3>
          <Link to="/">Go Back</Link>
        </Route>
      </Switch>
    </div>
  );
}
