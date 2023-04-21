import './Timelinewithimage.css';
import Timeline from './Timeline';

export default () => {
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
        <button className='get-started-btn'>Get Started</button>
        </div>
        </div>
    );
}