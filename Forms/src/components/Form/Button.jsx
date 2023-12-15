import React from "react";

const Button = ({ name }) => {
  return (
    <button type="submit" className="form-btn py-1 mt-4">
      {name} &nbsp; <span className=" bi-cloud-fill"></span>
    </button>
  );
};

export default Button;
