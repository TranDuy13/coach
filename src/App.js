import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/hook/PrivateRoute";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import User from "./pages/user/User";
function App() {
  return(
    <>
     <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/user" element={<PrivateRoute/>}>   
            <Route path="/user" element={<User/>}/>
          </Route>
          <Route path="/admin" element={<PrivateRoute/>}>   
            <Route path="/admin" element={<User/>}/>
          </Route>
        </Routes>
     </Router>
    
    </>
  )
}

export default App;
