import Topbar from "./components/Topbar/Topbar";
import SideBar from "./components/SideBar/SideBar";
import  "./app.css";
import Home from "./pages/Home/Home";
import UserList from "./pages/UserList/UserList"
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser"
import ProductList from "./pages/ProductList/ProductList"
import Product from "./pages/Product/Product";
import NewProduct from "./pages/NewProduct/NewProduct";

function App() {
  return (
    <Router> 
      <Topbar title="admin"/>
       <div className="container"> 
          <SideBar title="dashboard"/>
          <Switch> 
            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/users">
              <UserList/>
            </Route>

            <Route path="/user/:id">
              <User/>
            </Route>

            <Route path="/newUser">
              <NewUser/>
            </Route>

            <Route path="/products">
              <ProductList/>
            </Route>

            <Route path="/product/:id">
              <Product/>
            </Route>

            <Route path="/newProduct">
              <NewProduct/>
            </Route>
          </Switch>
        </div>
    </Router>

  );
}

export default App;
