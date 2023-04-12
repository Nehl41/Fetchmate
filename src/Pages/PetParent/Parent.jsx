import './Parent.css';
import petFrame from '../../assets/Image/Frame1.png'
import pointerPaw from '../../assets/Image/Bullet.png'
import bellawithnehal from '../../assets/Image/nehalandbella.jpg'
import Pointerset from '../../components/Bullet/Pointer'

const petParent = () => {
    return (
      <div className="parent-container d-flex">
      {/* Header */}
        <div className="parent-header max-width-100 d-flex">
          <div className="parent-header-content">
            <h1>This might be your pet when you leave them home?</h1>
            <br></br>
            <h5>
              You may have also thought of daycares but didn't found a reliable
              one, where you could track you day anytime or you may be unsure of
              there proper care.
            </h5>
          </div>
          <div className="parent-header-frame">
            <img src={petFrame} alt="petframe"></img>
          </div>
        </div>

        {/* Middle-box */}
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>

        <h2 className='h2style'>We are not just an app we aim to buiLd a community who loves and care about pets.</h2>
       
        <div className="parent-middle-container d-flex" style={{ justifyContent: "center", fontFamily: "Exo"}}>
       
        {/* Pointers */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "1",
              marginLeft: "7%"
            }}
          >
            <Pointerset
              pointerImg={pointerPaw}
              h4title="Be part of trustable community"
              h6discription="Pet sitters in their community are thoroughly screened and vetted, providing reliable pet care providers."
            />

            <Pointerset
              pointerImg={pointerPaw}
              h4title="No second thought to next vacation"
              h6discription="Find a temporary friend for your furry family member and enjoy a vacation with your human loved ones."
            />

            <Pointerset
              pointerImg={pointerPaw}
              h4title="Track your pet anytime"
              h6discription="Track your pet anytime with Fetchmate collars on our app and be assured that they are in safer hands."
            />

            <Pointerset
              pointerImg={pointerPaw}
              h4title="Make a new friend"
              h6discription="You can find a new friend for your pet and also help other pet parents like yourself by offering pet sitting services for their pets as well."
            />
          </div>

        {/* Left-container-Image */}
          <div className='side-pointer-container'>
            <img
              src={bellawithnehal}
              alt="bella"
              style={{
                maxHeight: "inherit",
                maxWidth: "inherit",
                borderRadius: "25%",
                marginLeft:"5%",
                boxShadow: "1px 1px 5px 0.7px black",
                border: ".7rem solid white",
              }}
            ></img>
            </div>
          </div>
        </div>

        {/* My-Pet-view */}
        <div></div>
      </div>
    );
}

export default petParent;