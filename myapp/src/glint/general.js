import Fade from "react-reveal/Fade";
const General = () => {
  return (
    <div className="advert">
      <Fade bottom>
        <div className="advert-info">
          <span>WELCOME TO ALIGHIETH'S</span>
          <p>
            We are a creative group of people who design influential brands and
            digital experiences.
          </p>
          <div className="home-content__buttons">
            <a href="#about">Start A Project</a>
            <a href="#contact">More About Us</a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default General;
