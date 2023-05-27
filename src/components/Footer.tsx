import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <footer className="footer-container">
      <div className="footer-row-1">
        <div className="footer-newsletter-wrapper">
          <h4 className="footer-newsletter-title">
            Get the latest NFT updates
          </h4>
          <div className="footer-newsletter-input-wrapper">
            <input
              type="text"
              placeholder="Your e-mail"
              className="footer-newsletter-input"
            />
            <button className="footer-newsletter-btn">I'm in</button>
          </div>
        </div>
        <nav className="footer-nav">
          <ul className="footer-nft-list">
            <h4 className="footer-nft-list-title">NFT</h4>
            <li>Explore</li>
            <li>Help center</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Become a partner</li>
            <li>Bug bounty</li>
          </ul>
          <ul className="footer-community-list">
            <h4 className="footer-community-list-title">Community</h4>
            <li>ARAI Token</li>
            <li>Discussion</li>
            <li>Voting</li>
            <li>Suggest feature</li>
            <li>NFT protocol</li>
            <li>Subscribe</li>
          </ul>
        </nav>
        <div className="footer-langauge">
          <h4 className="footer-language-title">Language</h4>
          <select className="footer-select">
            <option>English</option>
            <option>Chinese</option>
            <option>Brazil</option>
            <option>Arab</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>
      <div className="footer-row-2">
        <div className="footer-rights">
          <p>© NFT, Inc. All rights reserved.</p>
          <p className="footer-terms">Terms</p>
          <p className="footer-privacy">Privacy policy</p>
        </div>
        <div className="footer-icons">
          <div className="footer-icon-facebook">
            <GrFacebookOption />
          </div>
          <div className="footer-icon-instagram">
            <AiOutlineInstagram />
          </div>
          <div className="footer-icon-twitter">
            <AiOutlineTwitter />
          </div>
          <div className="footer-icon-linkedin">
            <FiLinkedin />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
