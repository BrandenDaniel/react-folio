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
        <a href="tel:0432375587">
          <Icon path={mdiCellphone} size={1} />
          04 32 375 587
        </a>
        <a href="mailto:brandendanielng@gmail.com">
          <Icon path={mdiEmailOutline} size={1} />
          Brandendanielng@gmail.com
        </a>
        <a href="#">
          <Icon path={mdiFileAccountOutline} size={1} />
          Download My Resume
        </a>
      </div>
    </div>
  );
}

export default Contact;
