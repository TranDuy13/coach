import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { login, reset } from "../components/features/user/userSlice";

function Login(){
    const {user, isSuccess,message} = useSelector((state)=>state.user)
    const navigate =useNavigate()
    useEffect(()=>{
        dispatch(reset())
    },[reset])
    useEffect(()=>{
        if(user){
            navigate("/")
        }
        if(isSuccess){
            return(<div>Loading...</div>)
        }
    },[user,isSuccess   ])
    const dispatch = useDispatch()
    const hanldeSubmit= (e)=>{
        e.preventDefault();
        const a ={
            b: "ádasdas"
        }
        dispatch(login(JSON.stringify(a)))
    }
    
    return(
        <>
            <div>Trang login hahdahs</div>
            <form onSubmit={hanldeSubmit}>
                <input type="text" />
                <input type="text" />
                <button>Submit</button>
            </form>
        </>
    )
}
export default Login;