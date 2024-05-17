import React from "react";
import Navbar from "./Navbar";
import "/home/dev/Practice React/test/src/components/styles/Login.css";
import axios from "axios";
import { useState } from "react";
import validator from "validator";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const requestOptions = {
      body: JSON.stringify({
        email: email,
        password: password,
        headers: { "Content-Type": "application/json" },
      }),
    };
    const config = {
      header: {
        "Content-Tyype": "application/json",
      },
    };
    await axios
      .post("https://jsonplaceholder.typicode.com/todos/", requestOptions)
      .then((respose) => console.log(respose));
  }

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

  return (
    <>
      <Navbar />
      <div className="pt">
        <div className="Auth">
          <form>
            <div className="input-value ">
              <label className="input_lable"></label>
              <input
                type="email"
                class="Input__InputElement__3TB0k"
                placeholder="E-mail Address"
                value={email}
                name="email"
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="input-value ">
              <label className="input_lable"></label>
              <input
                type="password"
                class=" Input__InputElement__3TB0k"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
              ></input>
            </div>
            <button className=" submit_button" onClick={handleSubmit}>
              SUBMIT
            </button>
          </form>
          <button className="signup_button">SIGN IN</button>
        </div>
      </div>
    </>
  );
};

export default Login;
