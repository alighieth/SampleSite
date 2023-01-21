import Fade from "react-reveal/Fade";
const General = () => {
  return (
    <div className="advert">
      <Fade bottom>
        <div className="advert-info">
          <span>WELCOME TO ALIGHIETH'S</span>
          <p>
            I am a creative junior developer who design influential brands and
            digital experiences.
          </p>
          <div className="home-content__buttons">
            <a href="#contact">Start A Project</a>
            <a href="#about">More About Us</a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default General;
