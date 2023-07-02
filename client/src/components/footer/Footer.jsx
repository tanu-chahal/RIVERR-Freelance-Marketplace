import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Careers</span>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on riverr</span>
            <span>Buying on riverr</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community Hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From riverr</h2>
            <span>Riverr Business</span>
            <span>Riverr Pro</span>
            <span>Riverr Logo Maker</span>
            <span>Riverr Guides</span>
            <span>Get Inspired</span>
            <span>Riverr Select</span>
            <span>Clear Voice</span>
            <span>Content Marketing</span>
            <span>Riverr Workspace</span>
            <span>Invoice Software</span>
            <span>Learn</span>
            <span>Online Courses</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>riverr</h2>
            <span>© riverr International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="twt" />
              <img src="/img/facebook.png" alt="fb" />
              <img src="/img/linkedin.png" alt="ln" />
              <img src="/img/pinterest.png" alt="pin" />
              <img src="/img/instagram.png" alt="ig" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="lang" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="coin" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="accessibility" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
