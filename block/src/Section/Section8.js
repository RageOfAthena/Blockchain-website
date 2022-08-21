import "./Section8.css";

import React from "react";
//Footer section
function Section6() {
  return (
    <footer>
      <div className="main">
        <div className="col1">
          {/* Contains all the profiles */}
          <h3 className="heading head">About Me</h3>
          <ul>
            <li>
              {/* Github profile */}
              <a href="https://github.com/RageOfAthena" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              {/* Linkedin profile */}
              <a
                href="https://www.linkedin.com/in/bijoy-majumder-8b16b7212/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              {/* resume profile */}
              <a
                href="https://drive.google.com/file/d/1QCkvhnrqLye_KVhYc_ALODO_fporL_AF/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>

        <div className="col2">
          {/* dummp links of various languages most common on many commercial web sites*/}
          <h3 className="heading head2">Language</h3>
          <div className="languages">
            <a href="#">Deutsch</a>
            <a href="#">English</a>
            <a href="#">Espaṅol</a>
            <a href="#">Français</a>
            <a href="#">Indonesian</a>
            <a href="#">Italian</a>
            <a href="#">Nederlands</a>
            <a href="#">Polnisch</a>
            <a href="#">Português</a>
            <a href="#">pyccknṅ</a>
            <a href="#">Tiéng Viêt</a>
            <a href="#">Türkçe</a>
          </div>
        </div>

        <div className="col3">
          <h3 className="heading">Get in touch</h3>
        </div>
      </div>
      {/* Terms and Conditions */}
      <p className="terms">
        <a href="#">Terms of purchase</a>
        <a href="#">Security and privacy</a>
        <a href="#">Newsletter</a>
      </p>
    </footer>
  );
}
export default Section6;
