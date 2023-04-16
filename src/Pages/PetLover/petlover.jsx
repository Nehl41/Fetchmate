import './petlover.css';
import CommonFooter from '../../components/Footer/commonfooter'
import Timelinewithimage from '../../components/Timeline/Timelinewithimage';

const petlover = () => {
    return (
      <div className="lover-container">
      <div className='wrapper-lover-header'>
        <div className='lover-header'>
         <h4>Are you fond of a tail wagging around you?</h4>
         <h2>Make a furry friend and Get Paid for it</h2>
         <h6>Scroll Down to know more</h6>
        </div>
      </div>
      {/* image and timeline */}
      <Timelinewithimage/>
      <CommonFooter/>
      </div>
    );
}

export default petlover;