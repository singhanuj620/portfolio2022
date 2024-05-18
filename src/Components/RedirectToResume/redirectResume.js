import React, { useEffect } from "react";
import "./redirectResume.css";
import { BeatLoader } from "react-spinners";

const RedirectResume = () => {
  useEffect(() => {
    window.location.href =
      "https://drive.google.com/file/d/1IJs3MkQlTwzyf-EdcytPNLVDSeO91X-o/view?usp=share_link";
  }, []);
  return (
    <div className="redirect_resume">
      <div>Redirecting to Resume</div>
      <div>
        <BeatLoader color="#36d7b7" />
      </div>
    </div>
  );
};

export default RedirectResume;
