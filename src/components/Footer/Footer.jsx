import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Swayam from '../../assets/Image/swayam.jpg'
import Nehal from '../../assets/Image/nehal.png'
import Akshada from '../../assets/Image/akshada.jpg'

function Footer() {
  return (
    <div className="footer-content">
      <div className="footer-developer-content">
        <h4>Fetchmate Developer</h4>
        <h6>
          FetchMate is an innovative app connecting pet owners with trustworthy
          dog walkers nearby. Our team of dedicated developers have created a
          user-friendly platform that makes finding the perfect dog walker for
          your furry friend easy and convenient. With unique features like
          real-time GPS tracking and seamless payment processing, FetchMate
          provides busy pet owners with the ultimate solution to ensure the best
          care for their pets.
        </h6>
      </div>

      <div className="footer-developer-profile">
        <div className="footer-developer-profiles enhance-image">
          <img
            src={Swayam}
            alt="Avtar"
            className="swayam"
          ></img>
          <h6>
            Swayam Prajapat <br /> Backend-developer
          </h6>
        </div>
        <div className="footer-developer-profiles enhance-image">
          <img src={Nehal} alt="Avtar" className="nehal"/>
          <h6>
            Nehal Patidar
            <br /> Front-end-developer
          </h6>
        </div>
        <div className="footer-developer-profiles enhance-image">
          <img
            src={Akshada}
            alt="Avtar"
            className="akshada"
          ></img>
          <h6>
            Akshadha <br /> Documentation and Paper work
          </h6>
        </div>
      </div>

      <div className="footer-socialmedia-links">
        <a
          href="https://www.instagram.com/"
          className="enhance-image"
          alt="link to Instagram"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com/"
          className="enhance-image"
          alt="link to LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://twitter.com/"
          className="enhance-image"
          alt="link to Twitter"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.Youtube.com/"
          className="enhance-image"
          alt="link to Youtube"
        >
          {" "}
          <YouTubeIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
