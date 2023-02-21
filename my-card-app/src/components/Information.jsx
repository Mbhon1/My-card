import React from "react";
import MyImage from "../images/me.jpeg";

// eslint-disable-next-line no-unused-vars
function Information(props) {
  return (
    <div className="info--container">
      <div className="info--image">
        <img src={MyImage} alt="my-portrait" />
      </div>

      <div className="info--basics">
        <h3 className="info--title">{props.name}</h3>
        <p className="info--desc">{props.title}</p>
        <a href="void" className="info--website">
          Mbhoni.website
        </a>
      </div>

      <div className="info--btn">
        <button className="info--email">
          <a href="void#">
            <i class="fa fa-inbox"></i>
          </a>
          <a href="mailto:mbhonibaloyi9@gmail.com" className="inbox">
            {props.email}
          </a>
        </button>

        <button className="info--linkedin">
          <a href="void#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mbhoni-baloyi-6870ba175"
            className="linkedin"
          >
            {props.linkedin}
          </a>
        </button>
      </div>
    </div>
  );
}

export default Information;
