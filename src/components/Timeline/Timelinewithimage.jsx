import './Timelinewithimage.css';
import Timeline from './Timeline';
import { useNavigate } from 'react-router-dom';

export default () => {
  const navigate=useNavigate()
    return(
        <div className='just-wrapper'>
      
      {/* image block */}
        <div className='image-block'>
          <div style={{width:'75vw',display: 'flex'}}><img className='catdog-img' src='https://media-be.chewy.com/wp-content/uploads/2020/04/07095118/cat_parent_type_cuddle.jpg' alt='Timelineimages'></img>
          <img className='catdog-img' src='https://media-be.chewy.com/wp-content/uploads/2020/04/07122741/dog_parent_type_super.jpg' alt='Timelineimages'></img></div>
        </div>

        {/* timeline-block */}
        <div className="timeline-image-block-container">
        <h4 className='h4style'>How to get started</h4>
          <Timeline/>
        <button onClick={()=>navigate("/sign-up")} className='get-started-btn'>Get Started</button>
        </div>
        </div>
    );
}