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
        <Fade left>
          <div className="about-subhead">HELLO THERE</div>
          <div className="about-header">I am AliGhieth</div>
          <hr className="about-line" />
          <p>
            I'm a software engineer, with more than 2 years of experience
            crafting compelling websites and softwares for multiple entities.
            Whether it's a database design, backend development, frontend
            development, developing current softwares or anything in between, I
            have a knack for helping brands find their voice and tell their
            story in a way that resonates with their audience.
            <br />
            <br />
            Most recently, I served as a Junior Salesforce Engineer in a Startup
            company where I was responsible for all aspects of supporting
            business requirements and deal with all the CRM needs of the client,
            as well as developing a devOps product and design their website user
            interface. In this role, I have also led a team of interns to
            achieve their optimal learning experience as well as developing
            their skills asynchronously. Besides, I have managed CRM platforms
            and worked closely with our sales and marketing teams to ensure our
            content was aligned with the their business goals. <br />
            <br />
            Prior to that, I spent multiple positions as an intern developing my
            skills as a software After all, I am committed to assisting you in
            successfully navigating the ever-evolving software environment so
            that you can produce lasting value for your business. With an
            approach that is centred on the user and creates trust as I assist
            you, we anticipate difficulties, and discover possibilities that
            have been neglected.. I am the one you should get in touch with if
            you want a website that exudes sophistication, professionalism, and
            engineering,
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
        </Fade>
        <hr className="about-line" />

        <div className="featuresContainer">
          <Fade right>
            <FeaturesBox
              image="brush.svg"
              title="Brand Identity"
              description="Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint."
            />
          </Fade>
          <Fade right>
            <FeaturesBox
              image="ill.svg"
              title="Illustration"
              description="Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint."
            />
          </Fade>
          <Fade right>
            <FeaturesBox
              image="marketing.svg"
              title="Marketing"
              description="Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint."
            />
          </Fade>
          <Fade right>
            <FeaturesBox
              image="world.svg"
              title="Web Design"
              description="Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint."
            />
          </Fade>
          <Fade right>
            <FeaturesBox
              image="cube.svg"
              title="Packaging Design"
              description="Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint."
            />
          </Fade>
          <Fade right>
            <FeaturesBox
              image="dev.svg"
              title="Web Development"
              description="Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint."
            />
          </Fade>
        </div>
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
      <p className="feature-p">{description} </p>
    </div>
    // </div>
  );
};

export { Extras };
export default About;
