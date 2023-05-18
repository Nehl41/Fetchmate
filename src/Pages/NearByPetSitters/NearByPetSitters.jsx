import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { CCard,CCardText,CCardImage,CCardTitle,CButton,CCardBody } from "@coreui/react" 
import petlover from '../../assets/Image/petlover.gif'

const NearByPetSitters=()=>{

    const [nearbyLovers,setNearbyLovers]=useState([])

    useEffect(()=>{
        getNearby()
    },[])

    const getNearby=async ()=>{
        const response=await axios({
            url:"http://localhost:3500/api/v1/user/nearby",
            method:"GET",
            headers:{
              Authorization:`Bearer ${window.localStorage.getItem("token")}`
            }
        })
        setNearbyLovers(response.data)
    }

    return (
        <div className="nearby-container" style={{padding:"2rem"}}>
            <h1 style={{padding:"0.5rem",textAlign:"center"}}>Near By Pet Sitters</h1>
        <div className="card-container" style={{display:"flex",flexWrap:"wrap"}}>
        {nearbyLovers.map(currLover=>{
            return (
            <CCard style={{ width: '18rem' }}>
            <CCardImage orientation="top" src={petlover} />
            <CCardBody>
              <CCardTitle>{currLover.name}</CCardTitle>
              <CCardText>
                I am A Cool And Gentle Pet Handler
              </CCardText>
              <input type="text" hidden value={currLover.id} />
              <CButton onClick={(e)=>{
                navigator.clipboard.writeText(currLover._id)
              }}>{` Copy User Code: ${currLover._id}`}</CButton>
            </CCardBody>
          </CCard>
            )
        })}
        </div>
        </div>
    )
}

export default NearByPetSitters