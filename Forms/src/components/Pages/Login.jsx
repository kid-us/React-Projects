import React, { useState } from "react";
import Joi from "joi-browser";
import Input from "../Form/Input";
import login_svg from "../../assets/login.svg";
import { Link } from "react-router-dom";
import Button from "../Form/Button";
import "../../account.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const schema = {
    email: Joi.string()
      .label("Email")
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
    password: Joi.string().required().min(5).label("Password"),
  };

  const validate = () => {
    const { error } = Joi.validate(user, schema, { abortEarly: false });

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors(errors || {});
    if (errors) return;

    doSubmit();
  };

  const doSubmit = () => {
    // call the server
    console.log("Submit");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    let userData = { ...user };
    userData[name] = value;

    setUser(userData);
    setErrors(errors);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-lg-5 pt-5">
          <div className="col-lg-8 col-md-8 col-12 shadow-lg p-5 mt-5">
            <div className="row">
              <div className="col-6 text-center mt-5 d-none d-md-block">
                <img
                  src={`${login_svg}`}
                  alt=""
                  className="mt-5"
                  width={"200px"}
                />
              </div>

              <div className="col-lg-6 col-md-6 col-12">
                <form onSubmit={handleSubmit}>
                  <p className="fw-semibold fs-3 mb-5">Sign In</p>
                  <Input
                    name="email"
                    label="Email"
                    icon={"bi-envelope-fill"}
                    value={user.email}
                    onChange={handleChange}
                    error={errors.email}
                  ></Input>

                  <Input
                    name="password"
                    label="Password"
                    icon={"bi-lock-fill"}
                    value={user.password}
                    onChange={handleChange}
                    error={errors.password}
                  ></Input>

                  <p className="fw-semibold small">
                    <Link
                      className="text-decoration-none small"
                      to={"/register"}
                    >
                      Forgot Password?
                    </Link>
                  </p>

                  <Button name={"Sign In"}></Button>

                  <p className="mt-4 fw-semibold small">
                    Don't have an account?
                    <Link
                      className="text-decoration-none ms-2"
                      to={"/register"}
                    >
                      Sign Up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
