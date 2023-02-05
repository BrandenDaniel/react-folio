import "../assets/scss/modal.scss";

const Modal = (props) => {
  const list = props.list;

  function closeModal() {
    document
      .querySelector(".portfolio-modal")
      .classList.remove("portfolio-modal--open");

    document
      .querySelector(".portfolio-modal__content--open")
      .classList.remove("portfolio-modal__content--open");
  }

  return (
    <div className="portfolio-modal">
      {list.map((item) => (
        <div
          className={`portfolio-modal__content portfolio-modal__${item.id}`}
          key={item.id}
        >
          <h3>{item.title}</h3>

          <div className="portfolio-modal__snapshots">
            {item.snapshot.map((snapshot) => (
              <img src={require(`../assets/images/${snapshot}`)} alt="" />
            ))}
          </div>
          <span className="portfolio-modal__close" onClick={closeModal}>
            close
          </span>
        </div>
      ))}
    </div>
  );
};

export default Modal;
