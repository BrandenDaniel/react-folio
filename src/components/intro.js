import "../assets/scss/intro.scss";
import "../assets/scss/contact.scss";
import { mdiArrowTopRightThick } from "@mdi/js";
import { mdiArrowDownThick } from "@mdi/js";
import Icon from "@mdi/react";
import Contact from "./contact";
import React from "react";

function viewWork() {
  document.querySelector(".portfolio").classList.add("portfolio--open");
}

function contactToggle() {
  document
    .querySelector(".intro__btn__contact")
    .classList.toggle("intro__btn__contact--open");
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
            <Icon path={mdiArrowTopRightThick} size={1.1} />
          </span>
          <span className="intro__btn__contact" onClick={contactToggle}>
            <Contact />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Intro;
