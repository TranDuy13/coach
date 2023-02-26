import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import User from "./pages/user/User";
function App() {
  return(
    <>
     <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
     </Router>
    
    </>
  )
}

export default App;
