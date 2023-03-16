import { useEffect,useState } from "react"
import { useSelector } from "react-redux"

export const Login =()=>{
     const [login,CheckLogin] =useState(true)
  
    const [user,setUser]=useState(localStorage.getItem('user'))
    useEffect(()=>{

        if(!user){
            console.log(user);
            CheckLogin(false)
     
        }else{
            console.log(4444);
            CheckLogin(true)
        }
    
    },[user]);
    console.log(login);
    return login
}