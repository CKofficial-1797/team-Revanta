import React, { useContext, useRef, useState } from "react";
import "./Form.css"
import { themeContext } from "../../Context";
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [state, handleSubmit] = useForm("xeqyyqve");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className="form-container">
    <div className="w-left">
    <div className="awesome">
      {/* darkMode */}
      <span style={{color: darkMode?'white': ''}}>To</span>
      <span>Contact </span>
      <div
        className="blur s-blur1"
        style={{ background: "#ABF1FF94" }}
      ></div>
    </div>
 
    <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name:</label>
              <input
        id="Name"
        type="text" 
        name="Name"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="email">
        Email Address :
      </label>
            <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      {/* <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      /> */}
      <label htmlFor="message">
        Message :
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <br/>
      <button className="button" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
    </div>
  );
}
