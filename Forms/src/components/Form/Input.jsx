import React from "react";

const Input = ({ name, label, value, onChange, error, icon }) => {
  return (
    <>
      <label htmlFor={name} className="form-label fw-semibold small mb-3 mt-3">
        {label}
      </label>

      <div className="input-group mb-3 fw-semibold">
        <span className={`input-group-text ${icon}`}></span>
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={name}
          className="form-control"
          id={name}
          aria-describedby="emailHelp"
        />
      </div>
      <div className="small fw-semibold">
        {error && <p className="text-danger small p-0 mt-2">{error}</p>}
      </div>
    </>
  );
};

export default Input;
