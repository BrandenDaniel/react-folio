import "../assets/scss/intro.scss";
import "../assets/scss/contact.scss";

function backHome() {
  document.querySelector(".contact").classList.remove("contact--open");
}

function Contact() {
  return (
    <div className="contact">
      <div className="contact__links">
        <a href="tel:0432375587">04 32 375 587</a>
        <a href="mailto:brandendanielng@gmail.com">brandendanielng@gmail.com</a>
        <a href="#">Download My Resume</a>
      </div>
      <span onClick={backHome} className="contact__back">
        <span className="emoji">👉</span>
      </span>
    </div>
  );
}

export default Contact;
