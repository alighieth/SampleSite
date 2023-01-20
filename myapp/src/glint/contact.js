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
        <h3
          className="contactform-subheading contactinfo-subheadingh3"
          style={{ color: "white" }}
        >
          Send Us a message
        </h3>

        <ContactFormForm />
      </div>
      <div className="contactinfo" id="contactinformation">
        <h3
          className="contactform-subheading contactinfo-subheadingh3"
          style={{ color: "white" }}
        >
          Contact Info
        </h3>
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
      </div>
    </div>
  );
};

const ContactInfo = ({ title, description }) => {
  return (
    <div>
      <h3 className="contactinfo-subheadingh3">{title}</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          fontfamily: "montserrat-light",
          color: "rgba(255, 255, 255, 0.4)",
          fontsize: "1.5rem",
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
      }}
    >
      <div className="form-field">
        <input type="text" name="" required="" placeholder="Your Name" />
      </div>
      <div className="form-field">
        <input type="text" name="" required="" placeholder="Your Email" />
      </div>
      <div className="form-field">
        <input type="text" name="" required="" placeholder="Subject" />
      </div>

      <div className="form-field">
        <textarea
          type="textarea"
          name=""
          required=""
          placeholder="Your Message"
        />
      </div>

      <a href="#" className="formSubmit">
        Submit
      </a>
    </form>
  );
};

export default Contact;
