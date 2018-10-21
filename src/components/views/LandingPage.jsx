import React, { Component } from "react";
import "../../stylesheets/views/LandingPage.css";
import mainLogo from "./InfoJobs.png";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <p
          style={{
            fontSize: "18px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          This is a project that transforms the job registration process.
        </p>
        <p
          style={{
            fontSize: "18px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          With a simple video recording, your application information will be
          smartly recorded and be sent to InfoJobs for automatic job matching.
        </p>
        <p
          style={{
            fontSize: "30px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          Get ready to be hired!
        </p>
        <div style={{ display: "flex" }}>
          <img
            style={{ width: 1270, height: 220, margin: "0 auto" }}
            src={mainLogo}
          />
        </div>
      </div>
    );
  }
}

export default LandingPage;
