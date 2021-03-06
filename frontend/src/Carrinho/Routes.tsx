import { BrowserRouter, Route, Switch } from "react-router-dom";
import Carrinhos from ".";
import Home from "../Home";
import Navbar from "../Navbar";



function Routes(){

    return(
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path= "/produto">
                    <Carrinhos/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>

            </Switch>
        
        </BrowserRouter>


    )



}
export default Routes;