import Fade from "react-reveal/Fade";
const GrowYourBusiness = () => {
  return (
    <div className="advert">
      <TextDiv />
      <GeneralImage />
    </div>
  );
};

const TextDiv = () => {
  return (
    <div className="textDiv">
      <h1>Grow Your Business Faster</h1>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        assumenda ea quo cupiditate facere deleniti fuga officia.
      </span>
      <br />
      <a href="#" className="btn">
        Get Started
      </a>
    </div>
  );
};

const GeneralImage = () => {
  return (
    <Fade right>
      <img src="work.png" />
    </Fade>
  );
};

export default GrowYourBusiness;
