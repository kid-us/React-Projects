import React, { useState } from "react";
import Joi from "joi-browser";
import Input from "../Form/Input";
import Button from "../Form/Button";
import login_svg from "../../assets/register.svg";
import "../../account.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const schema = {
    username: Joi.string().min(5).label("Username"),
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
        <div className="row justify-content-center pt-5">
          <div className="col-lg-8 col-md-8 col-12 shadow-lg px-5 py-5 mt-5">
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
                  <p className="fw-semibold fs-3 mb-5">Sign Up</p>
                  
                  <Input
                    name="username"
                    label="Username"
                    icon={"bi-person-fill"}
                    value={user.username}
                    onChange={handleChange}
                    error={errors.username}
                  ></Input>

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

                  <Button name={"Sign Up"}></Button>

                  <p className="mt-4 fw-semibold small">
                    Already have account?
                    <Link className="text-decoration-none ms-2" to={"/login"}>
                      Sign In
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

export default Register;
