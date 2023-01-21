import { useEffect } from "react";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="about-subhead contact" style={{ color: "#39b54a" }}>
        CONTACT US
      </div>
      <div className="about-header contact">
        Reach out for a new project or just say hello
      </div>
      <ContactForm />
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="contactForm">
      <div className="form" id="mycontactform">
        <h5
          className="contactform-subheading contactinfo-subheadingh5"
          style={{ color: "white" }}
        >
          Send Us a message
        </h5>

        <ContactFormForm />
      </div>
      <div className="contactinfo" id="contactinformation">
        <h5
          className="contactform-subheading contactinfo-subheadingh3"
          style={{ color: "white" }}
        >
          Contact Info
        </h5>
        <ContactInfo
          title="Where to Find Us"
          description={
            <p>
              5th Settlment, New Cairo <br />
              Cairo, Egypt
              <br />
              11458 EG
            </p>
          }
        />
        <ContactInfo
          title="Email Us At"
          description={
            <>
              <p>
                alighieth2709@gmail.com <br />
                alighieth09@gmail.com
                <br />
              </p>
            </>
          }
        />
        <ContactInfo
          title="Call Us At"
          description={
            <>
              <p>
                Phone: (+20) 1211399151 <br />
                Mobile: (+63) 555 0100 <br />
                Fax: (+63) 555 0101 <br />
              </p>
            </>
          }
        />
        <SocialMedia />
      </div>
    </div>
  );
};

const ContactInfo = ({ title, description }) => {
  return (
    <div>
      <h5 className="contactinfo-subheadingh5">{title}</h5>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          fontfamily: "montserrat-light",
          color: "rgba(255, 255, 255, 0.4)",
          fontSize: "0.75rem",
          lineHeight: "2",
          marginblockstart: "1em",
          marginblockend: "1em",
          margininlinestart: "0px",
          margininlineend: "0px",
        }}
      >
        {description}
      </div>
    </div>
  );
};

const SocialMedia = () => {
  return (
    <div
      style={{
        marginTop: "3rem",
      }}
    >
      <a href="https://github.com/alighieth" className="socialMediaIcons">
        <img width="10%" src="github.svg" alt="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/ali-ghieth"
        className="socialMediaIcons"
      >
        <img width="10%" src="linkedin.svg" alt="linkedin" />
      </a>
      <a href="https://github.com/alighieth" className="socialMediaIcons">
        <img width="10%" src="instagram.svg" alt="instagram" />
      </a>
    </div>
  );
};

const ContactFormForm = () => {
  useEffect(() => {
    let right = document.getElementById("contactinformation").style.height;

    document.getElementById("mycontactform").style.height = right;
    console.log(right);
  }, []);
  return (
    <form
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input type="text" name="" required="" placeholder="Your Name" />
      <input type="text" name="" required="" placeholder="Your Email" />
      <input type="text" name="" required="" placeholder="Subject" />
      <textarea
        name=""
        required=""
        cols="30"
        rows="10"
        placeholder="Your Message"
      />

      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <button className="btn">submit</button>
      </div>
    </form>
  );
};

export default Contact;
