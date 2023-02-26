import axios from "axios";
// const login = async(data)=>{

//     const response = await axios.post('localhost:3000/login', data)
//     return response.data
// }
const login = (data)=>{
    localStorage.setItem("user",data)
    console.log(data,"ádasdasd");
    return data
}
const getUser = ()=>{
   const data=  localStorage.getItem("user")
    return data
}
//gọi api thông âxios
const logout =()=>{
    localStorage.removeItem("user")
}
const userService ={
    login,
    logout,
    getUser
}
export default userService