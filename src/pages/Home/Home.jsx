import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../../components/features/user/userSlice"
import Redirect from "../../components/Redirect"
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

function Home(){
    const {user,isError, isSuccess} = useSelector((state)=>state.user)
    const dispatch =useDispatch()
    useEffect(()=>{
        dispatch(getUser())
    })
    return(
        <>
      
            <Redirect/>
            <div>
                {
                    user?(<div>{user.b}</div>):null
                }
            </div>
        
            <div>day la giao dien chinh</div>
            <div style={{paddingTop:'20px'}}>
                <div style={{display:"flex"}}>
                <PersonIcon/>
                    <input type="text" name="" id="" />
                    
                </div>
                <div style={{display:"flex"}}>
                <PersonIcon sx={{color:'red', marginRight:'30px'}}/>
                    <input type="text" name="" id="" />
                    
                </div>
       
            </div>
        </>
    )
}
export default Home