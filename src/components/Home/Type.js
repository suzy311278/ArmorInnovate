import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cybersecurity Experts",
          "Automation Specialists",
          "Innovators",
          "Tech Enthusiasts",
          "Problem Solvers"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
