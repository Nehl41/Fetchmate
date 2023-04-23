import "./petlover.css";
import CommonFooter from "../../components/Footer/commonfooter";
import Timelinewithimage from "../../components/Timeline/Timelinewithimage";
import ServiceList from "../../components/List/List";

const petlover = () => {
  return (
    <div className="lover-container">
      <div className="wrapper-lover-header">
        <div className="lover-header">
          <h4 className="lover-header-h4">
            Are you fond of a tail wagging around you?
          </h4>
          <h2 className="lover-header-h2">
            Make a furry friend and Get Paid for it
          </h2>
          <h6
            className="lover-header-h6"
            onClick={() => {
              window.scrollTo({ top: 500, behavior: "smooth" });
            }}
          >
            Know How!
          </h6>
        </div>
      </div>

      {/* services */}
      <div className="d-flex">
        <div className="written-wrap">
          <h2>Services you provide as Pet Sitter</h2>

          <ServiceList
            serviceimage={
              "https://icon-library.com/images/overnight-icon/overnight-icon-4.jpg"
            }
            servicesubtitle="Home away from Home"
            servicediscription="Boost Your Income with Overnight Pet Boarding in Your Home!"
          />

          <ServiceList
            serviceimage={
              "data:image/jpeg;base64,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"
            }
            servicesubtitle="Day Care"
            servicediscription="Give your pet a happy day while their parent is busy."
          />

          <ServiceList
            serviceimage={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKgubL_v0RWPfLH8o9XiWakvhxeugzrMx71Q&usqp=CAU"
            }
            servicesubtitle="Walk a Dog"
            servicediscription="Spend some time with a Dogo and walk them."
          />

          <ServiceList
            serviceimage={
              "data:image/png;base64,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"
            }
            servicesubtitle="Veterinary Care"
            servicediscription="Your furry friend has a Dr. appointment. Help them!"
          />
        </div>

        <div className="right-gif">
          <img
            src="https://cdn.dribbble.com/users/6191/screenshots/3618049/teddy_food_dribbble.gif"
            className="stylegif"
            alt="Dog and cat playing"
          ></img>
        </div>
      </div>
      {/* image and timeline */}
      <Timelinewithimage />

      <CommonFooter />
    </div>
  );
};

export default petlover;
