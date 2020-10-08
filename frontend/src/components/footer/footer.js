import React, { useState } from "react";
import "./footer.scss";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { menu } from "./data";

const icons = [
  <InstagramIcon />,
  <FacebookIcon />,
  <YouTubeIcon />,
  <TwitterIcon />,
  <LinkedInIcon />,
];

const Footer = () => {
  const [footerElements, setFooterElements] = useState(menu);
  const matches = useMediaQuery("(min-width:480px)");

  const content = matches ? (
    <footer id="footer">
      <div className="columns-wrapper">
        {footerElements.map((elements, index) => (
          <div key={index} className="column">
            {elements.array.map((el, index) =>
              index === 0 ? (
                <h5 key={index}>{el}</h5>
              ) : (
                <a key={index} href="#">
                  {el}
                </a>
              )
            )}
          </div>
        ))}
      </div>
      <div className="icons">
        {icons.map((i, index) => (
          <span key={index}>{i}</span>
        ))}
      </div>
      <p>XYZ Bilişim LTD. (xyz.com) info@xyz.com</p>
    </footer>
  ) : (
    <footer id="footer">
      <div className="columns-wrapper mobileMode">
        {footerElements.map((elements, index) => (
          <div key={index} className="column">
            {elements.array.map((el, index) =>
              index === 0 ? (
                <div
                  key={index}
                  className="footer-dropdowns"
                  onClick={() => {
                    const updated = footerElements.map((f) =>
                      f === elements ? { ...f, isActive: !f.isActive } : f
                    );
                    setFooterElements(updated);
                  }}
                >
                  <h5 key={index}>{el}</h5>
                  <ExpandMoreIcon />
                </div>
              ) : (
                <Collapse
                  key={index}
                  in={elements.isActive}
                  timeout="auto"
                  unmountOnExit
                >
                  <a href="#">{el}</a>
                </Collapse>
              )
            )}
          </div>
        ))}
      </div>
      <div className="icons">
        {icons.map((i, index) => (
          <span key={index}>{i}</span>
        ))}
      </div>
      <p>XYZ Bilişim LTD.</p>
    </footer>
  );

  return content;
};

export default Footer;
