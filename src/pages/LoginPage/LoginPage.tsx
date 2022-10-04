import React from "react";

export const LoginPage = () => {
  const triggerLogin = () => {
    console.log("Clicked on Login button");
  };

  return (
    <div>
      Login Page
      <div>
        <button onClick={triggerLogin}>Login</button>
      </div>
    </div>
  );
};
