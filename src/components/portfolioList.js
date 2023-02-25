import Modal from "./modal";
import Icon from "@mdi/react";
import { mdiArrowTopRightThick } from "@mdi/js";

const PortfolioList = (props) => {
  const list = props.list;

  function showModal(id) {
    document
      .querySelector(`.portfolio-modal`)
      .classList.add(`portfolio-modal--open`);

    document.querySelector(`.portfolio`).classList.add(`portfolio--hide-cards`);

    document
      .querySelector(`.portfolio-modal__${id}`)
      .classList.add(`portfolio-modal__content--open`);
  }

  return (
    <div className="portfolio-list">
      {list.map((item) => (
        <div
          className={`portfolio-list__card portfolio-list__${item.id}`}
          key={item.id}
        >
          <div className="portfolio-list__thumbnail">
            <img src={require(`../assets/images/${item.thumbnail}`)} alt="" />
          </div>
          <div className="portfolio-list__content">
            <img src={require(`../assets/images/${item.thumbnail}`)} alt="" />

            <h2>{item.title}</h2>
            <span
              onClick={() => {
                showModal(item.id);
              }}
            >
              <Icon path={mdiArrowTopRightThick} size={1.1} />
            </span>
          </div>
        </div>
      ))}

      <Modal list={list} />
    </div>
  );
};

export default PortfolioList;
