import './Pointer.css'

const FounderPointer = ({pointerImg,h4title,h6discription}) => {
    return (
      <div className="pointer">
        <div>
          <img src={pointerImg} className="pointerImg" alt="pointer-paw"></img>
        </div>
        <div>
          <h4>{h4title}</h4>
          <h6>{h6discription}</h6>
        </div>
      </div>
    );
}

export default FounderPointer;