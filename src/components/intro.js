import "../assets/scss/intro.scss";
import "../assets/scss/contact.scss";
import { mdiArrowTopRightBoldOutline } from "@mdi/js";
import { mdiArrowBottomLeftBoldOutline } from "@mdi/js";

import Icon from "@mdi/react";
import React from "react";

function viewWork() {
  document.querySelector(".portfolio").classList.add("portfolio--open");
}

function viewContact() {
  document.querySelector(".contact").classList.add("contact--open");
}

function Intro() {
  return (
    <div className="intro">
      <div className="intro__content">
        <h1>
          Hello,
          <span> I'm Branden</span>
        </h1>
        <h1>
          I am a<span> Front-End</span> <span>Web Developer</span>
        </h1>
        <div className="intro__btn">
          <span className="intro__btn__work" onClick={viewWork}>
            <Icon path={mdiArrowTopRightBoldOutline} size={1.1} />
          </span>
          <span className="intro__btn__contact" onClick={viewContact}>
            <Icon path={mdiArrowBottomLeftBoldOutline} size={1.1} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Intro;
