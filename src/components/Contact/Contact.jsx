import React,{useState} from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_slwhl9a",
        "template_lagyw94",
        form.current,
        "dBLPuadpJXLCVGOua"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="ContactUs">
      <div className="con-left">
        <span>Get in Touch</span>
        <span>Contact Me</span>
      </div>
      <div className="con-right">
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="from_name" id="" placeholder="Name" />
          <input type="text" name="user_email" id="" placeholder="Email" />
          <textarea name="message" id="" cols="30" rows="10" placeholder="Message" />
          <input style={{border:"none"}} type="submit" value="Send" className="button contact-btn"/>
          <span>{done && alert("Thanks for connecting to me!")}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
