import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../../components/features/user/userSlice"
import Redirect from "../../components/Redirect"

function Home(){
    const {user} = useSelector((state)=>state.user)
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
        </>
    )
}
export default Home