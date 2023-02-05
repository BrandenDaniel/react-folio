import "../assets/scss/intro.scss";
import "../assets/scss/portfolio.scss";

import { useState } from "react";
import PortfolioList from "./portfolioList";
import Modal from "./modal";

function Portfolio() {
  function backHome() {
    document.querySelector(".portfolio").classList.remove("portfolio--open");
  }

  const [list] = useState([
    {
      title: "My Blind Spots",
      thumbnail: "my-blind-spots.png",
      id: "myBlindSpots",
      desc: "test",
      snapshot: ["myblindspots-screen.png"],
    },
    {
      title: "Boxti",
      thumbnail: "boxtilogo.png",
      id: "boxti",
      desc: "test2",
      snapshot: ["boxti-home.png", "boxti-corporate.png", "boxti-about.png"],
    },
    {
      title: "Annie Pirotta",
      thumbnail: "annie-pirotta.png",
      id: "annieP",
      desc: "test3",
      snapshot: ["anniepirotta-home.png", "anniepirotta-sym.png"],
    },
    {
      title: "Kader Boot Co.",
      thumbnail: "kader-boot-co.png",
      id: "KBC",
      desc: "testha",
      snapshot: ["kader-home.png", "kader-shop.png", "kader-about.png"],
    },
    {
      title: "All West Engineering",
      thumbnail: "all-west-eng.png",
      id: "allWest",
      desc: "test4",
      snapshot: [
        "lms-1.png",
        "lms-2.png",
        "lms-3.png",
        "lms-4.png",
        "lms-5.png",
        "lms-6.png",
      ],
    },
    {
      title: "Perfect Cotton",
      thumbnail: "perfectcottonlogo.png",
      id: "perfectCotton",
      desc: "test5",
      snapshot: ["perfectcotton-home.png", "perfectcotton-shop.png"],
    },
    {
      title: "Print Strategy Management",
      thumbnail: "psmlogo.png",
      id: "PSM",
      desc: "test6",
      snapshot: ["psm-home.png", "psm-products.png", "psm-about.png"],
    },
  ]);

  return (
    <div className="portfolio">
      <span onClick={backHome} className="portfolio__back">
        <span className="emoji">👈</span>
      </span>
      <PortfolioList list={list} />
      <Modal list={list} />
    </div>
  );
}

export default Portfolio;
