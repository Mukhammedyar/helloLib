import React from 'react';

const Inputs = ({ login, inputChangeHandler }) => {
  return (
    <>
      <input
        type="email"
        name="email"
        className="input-style mb-2 rounded-md bg-gray-800 border-slate-700 border-[1px] focus:outline-none p-1"
        placeholder={login ? "Your Email" : "Full Name"}
        id="logemail"
        autoComplete="off"
        onChange={inputChangeHandler}
      />
      <input
        type="password"
        name="password"
        className="input-style rounded-md bg-gray-800 border-slate-700  border-[1px] focus:outline-none p-1"
        placeholder={login ? "Password" : "email"}
        id="logpass"
        autoComplete="off"
        onChange={inputChangeHandler}
      />
      <input
        type="password"
        name="logpass"
        className={`${login ? "hidden" : "block"} mt-2 input-style rounded-md bg-gray-800 border-slate-700  border-[1px] focus:outline-none p-1`}
        placeholder={login ? "" : "Password"}
        id="logpass"
        autoComplete="off"
      />
      <p className={`${login ? "block" : "hidden"} mt-0 mb-0`}>
        <a href="#0" className="text-sm text-left">
          Forgot your password?
        </a>
      </p>
    </>
  );
};

export default Inputs;
