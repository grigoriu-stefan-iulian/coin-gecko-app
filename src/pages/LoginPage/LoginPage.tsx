import React from "react";

import "./styles.scss";

export const LoginPage = () => {
  const triggerLogin = (e: any) => {
    e.preventDefault();
    console.log("Clicked on Login button");
  };

  return (
    <div className="container">
      <h3>Log into your account</h3>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            autoFocus={true}
            className="form-control"
            id="email"
            name="email"
            placeholder="Email address"
            type="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            autoComplete="off"
            className="form-control password"
            id="password"
            name="password"
            placeholder="Password"
            type="password"
          />
        </div>
        <button
          className="button button--primary btn-block btn-lg"
          onClick={triggerLogin}
        >
          Login
        </button>
      </form>
      <a className="container-footer" href="/signup">
        No account? &nbsp;<span>Sign Up</span>
      </a>
    </div>
  );
};
