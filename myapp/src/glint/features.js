import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#39b54a",
      }}
    >
      <div className="about" id="about">
        <Fade>
          <div className="about-subhead">HELLO THERE</div>
          <div className="about-header">We Are AliGhieth's</div>
          <hr className="about-line" />
          <p>
            It is important to take care of the pain itself, and it will be
            followed by the growth of the patient, but at the same time it will
            happen that there is a lot of work and pain. For to come to the
            smallest detail, no one should practice any kind of work unless he
            derives some benefit from it. Do not be angry with the pain in the
            reprimand in the pleasure he wants to be a hair from the pain in the
            hope that there is no breeding. Unless they are blinded by lust,
            they do not come forth; they are in fault who abandon their duties.
          </p>
        </Fade>
      </div>
    </div>
  );
};

const Extras = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <div className="about extras" id="about">
        <Fade>
          <div className="about-subhead extras">WHAT WE DO</div>
          <div className="about-header extrasblack">
            We’ve got everything you need to launch and grow your business
          </div>
          <hr className="about-line" />
          <div className="featuresContainer">
            <Fade bottum>
              <FeaturesBox
                image="brush.svg"
                title="Brand Identity"
                description="Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint."
              />
              <FeaturesBox
                image="ill.svg"
                title="Illustration"
                description="Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint."
              />
              <FeaturesBox
                image="marketing.svg"
                title="Marketing"
                description="Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint."
              />
              <FeaturesBox
                image="world.svg"
                title="Web Design"
                description="Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint."
              />
              <FeaturesBox
                image="cube.svg"
                title="Packaging Design"
                description="Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint."
              />
              <FeaturesBox
                image="dev.svg"
                title="Web Development"
                description="Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint."
              />
            </Fade>
          </div>
        </Fade>
      </div>
    </div>
  );
};

const FeaturesBox = ({ image, title, description }) => {
  return (
    <div>
      <div className="feature-box-img">
        <img width="10%" src={image} alt="brush" className="feature-image" />
        <h5 className="feature-title">{title}</h5>
      </div>
      <p
        className="feature-p"
        style={{
          justifySelf: "center",
        }}
      >
        {description}{" "}
      </p>
    </div>
    // </div>
  );
};

export { Extras };
export default About;
