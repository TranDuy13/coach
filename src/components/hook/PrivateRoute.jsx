import {Outlet, Navigate} from "react-router"
import { Login } from "./checkLogin"

const PrivateRoute =()=>{
    const login =Login()
    console.log(login);
    return login?<Outlet/>:<Navigate to ='/login'/>
}
export default PrivateRoute
