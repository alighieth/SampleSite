import Fade from "react-reveal/Fade";
const Prototypes = () => {
  return (
    <div className="proto">
      <PrototypesImage />
      <PrototypeDescription />
    </div>
  );
};

const PrototypesImage = () => {
  return (
    <Fade left>
      <div className="prototypesImage">
        <img
          height="100%"
          alt="web dev prototype"
          src="https://preview.colorlib.com/theme/landerz/images/do_ui_kit_download_cta_floating_devices-2x.png"
        />
      </div>
    </Fade>
  );
};

const PrototypeDescription = () => {
  return (
    <div
      style={{
        width: "40%",
        height: "100%",
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontsize: "40px",
          fontweight: "900",
          marginbottom: "30px",
        }}
      >
        Create interactive prototypes
      </h1>
      <span className="prototypeDescriptionSpan">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        neque nisi architecto autem molestias corrupti officia veniam.
      </span>
      <ul className="ul-check mb-5 list-unstyled success">
        <li>Adipisci excepturi aliquam</li>
        <li>Deleniti labore reiciendis</li>
      </ul>

      <Comment />
    </div>
  );
};

const Comment = () => {
  return (
    <div className="comment">
      <div className="person">
        {/* <img
          alt="account"
          height="10%"
          src="	https://preview.colorlib.com/theme/landerz/images/person_1.jpg"
        /> */}
      </div>
      <span>
        “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae
        ipsa asperiores inventore aperiam iure?”
      </span>
    </div>
  );
};

export default Prototypes;
