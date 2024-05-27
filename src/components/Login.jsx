import React from "react";
import { Navbar } from "./Navbar";
import "/home/dev/Practice React/test/src/components/styles/Login.css";
import axios from "axios";
import { useState } from "react";
import validator from "validator";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [signinText, setSigninText] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
      if (validator.isStrongPassword(value, { minLength: 6 })) {
        setErrorMessage("Please enter a valid");
        console.log(errorMessage);
      }
    }
  };
  const handleSigninText = () => {
    setSigninText((prevState) => !prevState);
  };

  return (
    <>
      <Navbar />
      <div className="pt">
        <div className="Auth">
          <form>
            <div className="input-value ">
              <label className="input-lable"></label>
              <input
                type="email"
                className="input-element"
                placeholder="E-mail Address"
                value={email}
                name="email"
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="input-value ">
              <label className="input-lable"></label>
              <input
                type="password"
                className="input-element"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
              ></input>
            </div>
            <button className="submit-button">SUBMIT</button>
          </form>
          <button onClick={handleSigninText} className="signup-button">
            {signinText ? "SIGN IN" : "REGISTER"}
          </button>
        </div>
      </div>
    </>
  );
};
