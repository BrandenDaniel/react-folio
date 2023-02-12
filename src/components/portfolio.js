import "../assets/scss/intro.scss";
import "../assets/scss/portfolio.scss";
import { useState } from "react";
import PortfolioList from "./portfolioList";
import Modal from "./modal";
import Icon from "@mdi/react";
import { mdiWordpress } from "@mdi/js";

function Portfolio() {
  function backHome() {
    document.querySelector(".portfolio").classList.remove("portfolio--open");
  }

  const [list] = useState([
    {
      title: "My Blind Spots",
      thumbnail: "my-blind-spots.png",
      id: "myBlindSpots",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod molestias eius ipsam vitae possimus iusto molestiae repudiandae labore rem, iste ea tempore incidunt est odio a neque ipsa soluta distinctio! Accusantium quia eligendi voluptatem autem numquam beatae expedita velit fugiat.",
      snapshot: ["myblindspots-screen.png"],
      stack: [mdiWordpress],
    },
    {
      title: "Boxti",
      thumbnail: "boxtilogo.png",
      id: "boxti",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod molestias eius ipsam vitae possimus iusto molestiae repudiandae labore rem, iste ea tempore incidunt est odio a neque ipsa soluta distinctio! Accusantium quia eligendi voluptatem autem numquam beatae expedita velit fugiat.",
      snapshot: ["boxti-home.png", "boxti-corporate.png", "boxti-about.png"],
      stack: [mdiWordpress],
    },
    {
      title: "Annie Pirotta",
      thumbnail: "annie-pirotta.png",
      id: "annieP",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod molestias eius ipsam vitae possimus iusto molestiae repudiandae labore rem, iste ea tempore incidunt est odio a neque ipsa soluta distinctio! Accusantium quia eligendi voluptatem autem numquam beatae expedita velit fugiat.",
      snapshot: ["anniepirotta-home.png", "anniepirotta-sym.png"],
      stack: [mdiWordpress],
    },
    {
      title: "Kader Boot Co.",
      thumbnail: "kader-boot-co.png",
      id: "KBC",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod molestias eius ipsam vitae possimus iusto molestiae repudiandae labore rem, iste ea tempore incidunt est odio a neque ipsa soluta distinctio! Accusantium quia eligendi voluptatem autem numquam beatae expedita velit fugiat.",
      snapshot: ["kader-home.png", "kader-shop.png", "kader-about.png"],
      stack: [mdiWordpress],
    },
    {
      title: "All West Engineering",
      thumbnail: "all-west-eng.png",
      id: "allWest",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod molestias eius ipsam vitae possimus iusto molestiae repudiandae labore rem, iste ea tempore incidunt est odio a neque ipsa soluta distinctio! Accusantium quia eligendi voluptatem autem numquam beatae expedita velit fugiat.",
      snapshot: [
        "lms-1.png",
        "lms-2.png",
        "lms-3.png",
        "lms-4.png",
        "lms-5.png",
        "lms-6.png",
      ],
      stack: [mdiWordpress],
    },
    {
      title: "Perfect Cotton",
      thumbnail: "perfectcottonlogo.png",
      id: "perfectCotton",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod molestias eius ipsam vitae possimus iusto molestiae repudiandae labore rem, iste ea tempore incidunt est odio a neque ipsa soluta distinctio! Accusantium quia eligendi voluptatem autem numquam beatae expedita velit fugiat.",
      snapshot: ["perfectcotton-home.png", "perfectcotton-shop.png"],
      stack: [mdiWordpress],
    },
    {
      title: "Print Strategy Management",
      thumbnail: "psmlogo.png",
      id: "PSM",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod molestias eius ipsam vitae possimus iusto molestiae repudiandae labore rem, iste ea tempore incidunt est odio a neque ipsa soluta distinctio! Accusantium quia eligendi voluptatem autem numquam beatae expedita velit fugiat.",
      snapshot: ["psm-home.png", "psm-products.png", "psm-about.png"],
      stack: [mdiWordpress],
    },
  ]);

  return (
    <div className="portfolio">
      <span onClick={backHome} className="portfolio__back">
        <span className="emoji">👈</span>
      </span>
      <PortfolioList list={list} />
    </div>
  );
}

export default Portfolio;
