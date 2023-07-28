import React from 'react';
import "./Footer.css";
import {Link} from "react-router-dom";


const Footer = () => {
  return (
<footer className="new_footer_area bg_color">
  <div className="new_footer_top">
    <div className="footercontainer">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility: "visible", animationDelay: "0.2s",  animationName: "fadeInLeft"}}>
            <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
            <p>Don’t miss any updates of our new templates and extensions.!</p>
            <form action="#" className="f_subscribe_two mailchimp" method="post"  _lpchecked="1">
              <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
              <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
              <p className="mchimp-errmessage" style={{display: "none"}}></p>
              <p className="mchimp-sucmessage" style={{display: "none"}}></p>
            </form>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{visibility: "visible", animationDelay: "0.4s",  animationName: "fadeInLeft"}}>
            <h3 className="f-title f_600 t_color f_size_18">Download</h3>
            <ul className="list-unstyled f_list">
              <li><Link to="/home">Company</Link></li>
              <li><Link to="/home">Android App</Link></li>
              <li><Link to="/home">ios App</Link></li>
              <li><Link to="/home">Desktop</Link></li>
              <li><Link to="/home">Projects</Link></li>
              <li><Link to="/home">My tasks</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{visibility: "visible", animationDelay: "0.6s",  animationName: "fadeInLeft"}}>
            <h3 className="f-title f_600 t_color f_size_18">Help</h3>
            <ul className="list-unstyled f_list">
              <li><Link to="/home">FAQ</Link></li>
              <li><Link to="/home">Term &amp; conditions</Link></li>
              <li><Link to="/home">Reporting</Link></li>
              <li><Link to="/home">Documentation</Link></li>
              <li><Link to="/home">Support Policy</Link></li>
              <li><Link to="/home">Privacy</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{visibility: "visible", animationDelay: "0.8s",  animationName: "fadeInLeft"}}>
            <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
            <div className="f_social_icon">
              <Link to="/home" className="fab fa-facebook"></Link>
              <Link to="/home" className="fab fa-twitter"></Link>
              <Link to="/home" className="fab fa-linkedin"></Link>
              <Link to="/home" className="fab fa-pinterest"></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer_bg">
      <div className="footer_bg_one"></div>
      <div className="footer_bg_two"></div>
    </div>
  </div>
</footer>
  );
};

export default Footer;









