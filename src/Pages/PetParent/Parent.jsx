import './Parent.css';
import petFrame from '../../assets/Image/Frame1.png'


const petParent = () => {
    return(
        <div className='parent-container d-flex'>
            <div className='parent-header max-width-100'>
                <div className='parent-header-content'>This might be your pet when you leave them home?<br></br>
                You may have also thought of daycares but didn't found a reliable one<br></br>
                where you could track you day anytime or you may be unsure of there proper care.
                </div>
                <div className='parent-header-frame'><img src={petFrame}></img></div>
            </div>
        </div>
    );
}

export default petParent;