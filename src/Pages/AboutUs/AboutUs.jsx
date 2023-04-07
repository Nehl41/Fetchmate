import FounderCard from '../../components/Card/Card'
import './AboutUs.css'
import CardLover from '../../assets/Image/CardLover.jpg'

export default ()=>{
    return (<div className='about-us-wrapper'>
       <div className="creator-details">
        <div className="founder-card">
        <FounderCard className="founder-card" cardImage={CardLover} cardDescription={"Nehal,Akshada and Swayam"} cardTitle={"The Founders And Developers"}/>
        </div>
       <div className="about-us-heading">
        <div className="about-us-main-heading">
        About Us
        </div>
       </div>
       </div>
    </div>)
}