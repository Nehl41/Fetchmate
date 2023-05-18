import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import userData from "../../utils/getUserData"

const CurrentRequests=()=>{
    const currentUser=userData.currentUSer
    const [currentRequest,setCurrentRequest]=useState([])
    useEffect(()=>{
        getCurrentRequests()
    },[])

    const getCurrentRequests=async ()=>{
      const response = await axios({
          url:"http://localhost:3500/api/v1/current-requests",
          data:{userId:currentUser._id},
          method:"POST"
        })
    console.log(response.data);
    
    }

    return (<div className="current-request-container" style={{padding:"2rem"}}>
    <h1 style={{padding:"0.5rem",textAlign:"center"}}>Current Pet Sitting Requests</h1>

    </div>)
}

export default CurrentRequests