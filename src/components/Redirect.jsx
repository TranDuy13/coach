import { Link } from "react-router-dom"

function Redirect(){
    return(
        <>
            <Link to='/'>
               <h2>Trang chu</h2>
            </Link>
            <Link to='/user'>
                <h2>user</h2>
            </Link>
        </>
    )
}
export default Redirect