import React from "react";

const Interests = (props) => {
  return (
    <div className="interests--container">
      <h4 className="interests--title">{props.title}</h4>
      <p className="interests--desc">{props.desc}</p>
    </div>
  );
};

export default Interests;
