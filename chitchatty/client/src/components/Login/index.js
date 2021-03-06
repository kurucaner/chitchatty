import React, { useState } from "react";

//Style
import { Wrapper, Content, Form, Input } from "./Login.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

//Form

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const initialState = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  };

  const [isSignedUp, setIsSignedUp] = useState(true);
  const [form, setForm] = useState(initialState);
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();
    console.log("form submitted");

    const createUser = (formData) => {
      const { firstName, lastName, username, email, password } = formData;

      const user = {
        firstName,
        lastName,
        username,
        email,
        password,
      };

      const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };
      fetch("http://localhost:9292/users", configObj)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("user", data.id);
          console.log("User posted");
          console.log(data);
          setForm(initialState);
          setIsLoggedIn(!isLoggedIn);
        });
    };
    createUser(form);
    // setIsSignedUp(!isSignedUp);
  };

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    console.log("sign in submitted");

    const login = (formData) => {
      const { email, password } = formData;

      const user = {
        email,
        password,
      };

      const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };
      fetch("http://localhost:9292/login", configObj)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("user", data.id);
          console.log("User posted");
          console.log(data);
          setForm(initialState);
          setIsLoggedIn(!isLoggedIn);
        })
        .catch((err) => {
          alert("Invalid login information!");
        });
    };
    login(form);
  };

  const switchMode = () => {
    setIsSignedUp((prevIsSignedUp) => !prevIsSignedUp);
  };

  return (
    <Wrapper>
      <Content>
        <Form>
          <h2>Welcome!</h2>
          <em>We are happy to see you!</em>
          {isSignedUp ? (
            <form onSubmit={handleSubmitSignUp}>
              <Input>
                <label htmlFor="firstName">FIRST NAME:</label>
                <input
                  name="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="lastName">LAST NAME:</label>
                <input
                  name="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="userName">USERNAME:</label>
                <input
                  name="username"
                  type="text"
                  value={form.username}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">EMAIL:</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="password">PASSWORD:</label>
                <input
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                <i onClick={togglePasswordVisiblity}>{eye}</i>
                <div className="auth__form-container_fields-content_button">
                  <button>Sign Up</button>
                </div>
              </Input>
            </form>
          ) : (
            <form onSubmit={handleSubmitSignIn}>
              <Input>
                <label htmlFor="email">EMAIL:</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="password">PASSWORD:</label>
                <input
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                <i onClick={togglePasswordVisiblity}>{eye}</i>
                <div className="auth__form-container_fields-content_button">
                  <button>Sign In</button>
                </div>
              </Input>
            </form>
          )}
          <div className="auth__form-container_fields-account">
            <p>
              {isSignedUp
                ? "Already have an account? "
                : "Don't have an account? "}
              <em onClick={switchMode}>{isSignedUp ? "Sign In" : "Sign Up"}</em>
            </p>
          </div>
        </Form>
      </Content>
    </Wrapper>
  );
};

export default Login;
