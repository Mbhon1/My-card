import React from "react";

const About = (props) => {
  return (
    <div className="about--container">
      <h4 className="about--title">{props.title}</h4>
      <p className="about--desc">{props.desc}</p>
    </div>
  );
};

export default About;
