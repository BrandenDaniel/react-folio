import "../assets/scss/modal.scss";
import Icon from "@mdi/react";
// import { mdiWordpress } from "@mdi/js";
import { mdiCloseBoxMultiple } from "@mdi/js";

const Modal = (props) => {
  const list = props.list;

  function closeModal() {
    document
      .querySelector(".portfolio-modal--open")
      .classList.remove("portfolio-modal--open");

    document
      .querySelector(".portfolio-modal__content--open")
      .classList.remove("portfolio-modal__content--open");

    document.querySelector(".portfolio").classList.remove("portfolio--dark-bg");
  }

  return (
    <div className="portfolio-modal">
      {list.map((item) => (
        <div
          className={`portfolio-modal__content portfolio-modal__${item.id}`}
          key={item.id}
        >
          <h3>
            {item.title}
            <span className="portfolio-modal__close" onClick={closeModal}>
              <Icon path={mdiCloseBoxMultiple} size={1} />
            </span>
          </h3>
          <h4>The project</h4>
          <div className="portfolio-modal__desc">
            <p>{item.desc}</p>
            <div>
              <h5>Build stack</h5>
              <div className="portfolio-modal_stack-icons">
                {item.stack.map((icons) => (
                  <Icon path={icons} size={1.5} />
                ))}
              </div>
            </div>
          </div>
          <div className="portfolio-modal__snapshots">
            {item.snapshot.map((snapshot) => (
              <img src={require(`../assets/images/${snapshot}`)} alt="" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Modal;
