import { NavLink } from "react-router-dom"

let Header=()=>{
    return(
        <div className="head">
            <NavLink style={({isActive})=>({color:isActive?'red':'blue'})} to="/">Home</NavLink>
           
            <NavLink style={({isActive})=>({color:isActive?'red':'blue'})} to="/profile">Profile</NavLink>
           
            <NavLink style={({isActive})=>({color:isActive?'red':'blue'})} to="/error">Error</NavLink>
            <NavLink style={({isActive})=>({color:isActive?'red':'blue'})} to="/students/5">StudentDetails</NavLink>
           
        </div>
    )
}
export default Header