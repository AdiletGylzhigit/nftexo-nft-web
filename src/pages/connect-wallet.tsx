import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/connect-wallet.css";
import CreditCard from "../assets/icons/credit-card.png";
import MetaMask from "../assets/icons/mask.png";
import ShoppingBag from "../assets/icons/shopping-bag.png";
import CryptoPunk from '../assets/images/hero-punk1.jpg';

type Props = {};

const ConnectWalletScreen = ({}: Props) => {
  return (
    // cw - connect-wallet
    <div className="cw-container">
      <Header />
      <main>
        <h1 className="cw-title">Connect your wallet</h1>
        <p className="cw-text">
          Image, Video, Audio, or 3D Model. File types supported: JPG, PNG, GIF,
          SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
        </p>
        <div className="cw-even-columns">
          <div className="cw-column-1">
            <div className="sw-coin-base-wrapper">
              <div className="cw-coin-base-img-wrapper">
                <img src={CreditCard} alt="credit-card" className="cw-credit-card-icon" />
              </div>
              <span>Coin base wallet</span>
            </div>
            <div className="cw-ether-wallet-wrapper">
              <div className="cw-ether-wallet-img-wrapper">
                <img src={MetaMask} alt="meta-mask" className="cw-meta-mask-icon" />
              </div>
              <span>My ether wallet</span>
            </div>
            <div className="cw-wallet-connect-wrapper">
              <div className="cw-wallet-connect-img-wrapper">
                <img src={ShoppingBag} alt="shopping-bag" className="cw-shopping-bag-icon" />
              </div>
              <span>Wallet connect</span>
            </div>
          </div>
          <div className="cw-column-2">
            <img src={CryptoPunk} alt="crypto-punk" className="cw-crypto-punk-img" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConnectWalletScreen;
