import React from "react";

export const SignUpPage = () => {
  const triggerSignUp = () => {
    console.log("Clicked on Sign Up button");
  };

  return (
    <div>
      Sign Up Page
      <div>
        <button onClick={triggerSignUp}>Sign Up</button>
      </div>
    </div>
  );
};
