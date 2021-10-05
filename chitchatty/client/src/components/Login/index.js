import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

//Style
import { Wrapper, Content, Form, Input } from "./Login.styles";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

//Form

const cookies = new Cookies();

const initialState = {
  fullName: "",
  username: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  avatarURL: "",
};

const Login = () => {
  const [isSignedUp, setIsSignedUp] = useState(true);
  const [form, setForm] = useState(initialState);
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password, phoneNumber, avatarURL } = form;

    const URL = "https://localhost:5000/auth";
    // const URL = 'https://medical-pager.herokuapp.com/auth';

    const {
      data: { token, userId, hashedPassword, fullName },
    } = await axios.post(`${URL}/${isSignedUp ? "signup" : "login"}`, {
      username,
      password,
      fullName: form.fullName,
      phoneNumber,
      avatarURL,
    });

    cookies.set("token", token);
    cookies.set("username", username);
    cookies.set("fullName", fullName);
    cookies.set("userId", userId);

    if (isSignedUp) {
      cookies.set("phoneNumber", phoneNumber);
      cookies.set("avatarURL", avatarURL);
      cookies.set("hashedPassword", hashedPassword);
    }

    window.location.reload();
  };

  const switchMode = () => {
    setIsSignedUp((prevIsSigedUp) => !prevIsSigedUp);
  };
  return (
    <Wrapper>
      <Content>
        <Form>
          <h2>Welcome!</h2>
          <em>We are happy to see you!</em>
          <form onSubmit={handleSubmit}>
            {isSignedUp ? (
              <Input>
                <label htmlFor="firstName">FIRST NAME:</label>
                <input
                  name="firstName"
                  type="text"
                  onChange={handleChange}
                  required
                />

                <label htmlFor="lastName">LAST NAME:</label>
                <input
                  name="lastName"
                  type="text"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="userName">USERNAME:</label>
                <input
                  name="userName"
                  type="text"
                  onChange={handleChange}
                  required
                />
                <label for="email">EMAIL:</label>
                <input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="password">PASSWORD:</label>
                <input
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  onChange={handleChange}
                  required
                />
                <i onClick={togglePasswordVisiblity}>{eye}</i>
                <div className="auth__form-container_fields-content_button">
                  <button>Sign Up</button>
                </div>
              </Input>
            ) : (
              <Input>
                <label for="email">EMAIL:</label>
                <input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="password">PASSWORD:</label>
                <input
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  onChange={handleChange}
                  required
                />
                <i onClick={togglePasswordVisiblity}>{eye}</i>
                <div className="auth__form-container_fields-content_button">
                  <button>Sign In</button>
                </div>
              </Input>
            )}
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignedUp
                ? "Already have an account?"
                : "Don't have an account?"}
              <em onClick={switchMode}>{isSignedUp ? "Sign In" : "Sign Up"}</em>
            </p>
          </div>
        </Form>
      </Content>
    </Wrapper>
  );
};

export default Login;
