import './petlover.css';
import CommonFooter from '../../components/Footer/commonfooter'
import Timelinewithimage from '../../components/Timeline/Timelinewithimage';
import ServiceList from '../../components/List/List'

const petlover = () => {
    return (
      <div className="lover-container">
      <div className='wrapper-lover-header'>
        <div className='lover-header'>
         <h4 className='lover-header-h4'>Are you fond of a tail wagging around you?</h4>
         <h2 className='lover-header-h2'>Make a furry friend and Get Paid for it</h2>
         <h6 className='lover-header-h6'>Scroll Down to know more</h6>
        </div>
      </div>

      <div>
        <div className='written-wrap'>
          <h4>What services you can provide being a pet sitter</h4>
          <ServiceList serviceTitle="Home Away from Home" subserviceTitle="Get Paid more by welcoming your furry friend for Overnight Boarding!" />
        </div>
      </div>
      {/* image and timeline */}
      <Timelinewithimage/>
      <CommonFooter/>
      </div>
    );
}

export default petlover;