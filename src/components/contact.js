import "../assets/scss/intro.scss";
import "../assets/scss/contact.scss";
import Icon from "@mdi/react";

import { mdiCellphone } from "@mdi/js";
import { mdiEmailOutline } from "@mdi/js";
import { mdiFileAccountOutline } from "@mdi/js";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__links">
        <a href="tel:0432375587">Mobile</a>
        <a href="mailto:brandendanielng@gmail.com">Email</a>
        <a href="#">Resume</a>
      </div>
    </div>
  );
}

export default Contact;
