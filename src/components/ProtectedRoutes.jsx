import { Navigate, Outlet } from "react-router-dom"


const ProtectedRoutes=({children,...rest})=>{
    // const token=  window.localStorage.getItem("token")
    const token=true;
    return (!token)?<Navigate to="/login"/>:<Outlet/>; 
}

export default ProtectedRoutes