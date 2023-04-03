import './footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Footer(){

       const [displayProperty,setDisplayProperty]=useState("block")
  
  const currentRoute=useLocation().pathname

  useEffect(()=>{
    if(currentRoute=="/login" || currentRoute=="/sign-up"){
      setDisplayProperty("none")
    }
  },[])

    return(
        <div className="footer-content" style={{display:displayProperty}}>
            <div className='footer-developer-content'>
            <h4>Fetchmate Developer</h4>
            <h6  >FetchMate is an innovative app connecting pet owners with trustworthy dog walkers
             nearby. Our team of dedicated developers have created a user-friendly platform that makes 
             finding the perfect dog walker for your furry friend easy and convenient. 
             With unique features like real-time GPS tracking and seamless payment processing, FetchMate 
            provides busy pet owners with the ultimate solution to ensure the best care for their pets.</h6>
            </div>

            <div className='footer-developer-profile'>
                   <div className='footer-developer-profiles'>
                          <img src='https://media.gettyimages.com/id/1227618779/vector/human-face-avatar-icon-profile-for-social-network-man-vector-illustration.jpg?s=1024x1024&w=gi&k=20&c=mS_M-kj09U5NT_sQlI1IslJSUNYxAmu6XHidGwwjOKs=' 
                          alt='Avtar'></img>
                          <h6>Swayam Prajapat <br/> Backend-developer</h6>
                   </div>
                   <div className='footer-developer-profiles'>
                          <img src='https://media.gettyimages.com/id/1227618779/vector/human-face-avatar-icon-profile-for-social-network-man-vector-illustration.jpg?s=1024x1024&w=gi&k=20&c=mS_M-kj09U5NT_sQlI1IslJSUNYxAmu6XHidGwwjOKs=' 
                          alt='Avtar'></img>
                          <h6>Nehal Patidar<br/> Front-end-developer</h6>
                   </div>
                   <div className='footer-developer-profiles'>
                          <img src='https://media.gettyimages.com/id/1227618779/vector/human-face-avatar-icon-profile-for-social-network-man-vector-illustration.jpg?s=1024x1024&w=gi&k=20&c=mS_M-kj09U5NT_sQlI1IslJSUNYxAmu6XHidGwwjOKs=' 
                          alt='Avtar'></img>
                          <h6>Swayam Prajapat <br/> Ese-hi-chalne do-developer</h6>
                   </div>
            </div>

            <div className='footer-socialmedia-links'>
            <InstagramIcon/><LinkedInIcon/><TwitterIcon/><YouTubeIcon/>
            </div>
        </div>
    );
}

export default Footer;