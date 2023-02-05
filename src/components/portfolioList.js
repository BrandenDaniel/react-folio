const PortfolioList = (props) => {
  const list = props.list;

  function showModal(id) {
    document
      .querySelector(`.portfolio-modal`)
      .classList.add(`portfolio-modal--open`);

    document
      .querySelector(`.portfolio-modal__${id}`)
      .classList.add(`portfolio-modal__content--open`);

    // document
    //   .querySelector(`.portfolio-modal__${list.id}`)
    //   .classList.add("portfolio-modal--open");
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
            <h2>{item.title}</h2>
            <span
              onClick={() => {
                showModal(item.id);
              }}
            >
              Learn More
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioList;