import { useState } from "react";
import "../../styles/product.css";
import PunkVideo from "../../assets/videos/punk-video.gif";
import Creator from "../../assets/images/user-avatar.jpg";
import Collection from "../../assets/images/collectible.jpg";
import { MdClose } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductBidItem from "../../components/ProductBidItem";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

type Props = {};

const ProductIdScreen = ({}: Props) => {
  const [readMore, setReadMore] = useState<boolean>(false);
  const [placeBid, setPlaceBid] = useState<boolean>(false);
  const [followSteps, setFollowSteps] = useState<boolean>(false);
  return (
    <div className="product-container">
      <Header />
      <main>
        <div className="product-col-1">
          <img src={PunkVideo} alt="punk-gif" className="product-gif" />
        </div>
        <div className="product-col-2">
          <h1 className="product-title">The Rusty Robots</h1>
          <p className="product-edition-text">
            Not for sale · 20 editions ·{" "}
            <span className="product-bid-text">Highest bid 10 wETH</span>
          </p>
          <p className="product-description">
            We’re excited you’re interested in an NFT created by Twitter. As a
            recipient of the Twitter NFT, either through an initial transfer
            from Twitter or a subsequent transfer or purchase.
          </p>
          {/* Show only when clicked Read More */}
          <p style={{ display: `${readMore ? "block" : "none"}` }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            illo molestias doloribus incidunt a corrupti, soluta excepturi
            consequuntur id, unde aut obcaecati dignissimos, accusantium libero
            sed commodi enim similique rem!
          </p>
          <span
            className="product-read-more-text"
            onClick={() => setReadMore(true)}
            style={{ display: `${readMore ? "none" : "block"}` }}
          >
            Read More
          </span>
          <span
            className="product-view-less-text"
            onClick={() => setReadMore(false)}
            style={{ display: `${readMore ? "block" : "none"}` }}
          >
            View Less
          </span>
          <div className="product-creator-collection">
            <div className="product-creator">
              <h4 className="product-creator-title">Creator</h4>
              <div className="product-creator-info">
                <img
                  src={Creator}
                  alt="creator"
                  className="product-creator-img"
                />
                <h5 className="product-creator-username">Rustery</h5>
              </div>
            </div>
            <div className="product-collection">
              <h4 className="product-collection-title">Collection</h4>
              <div className="product-collection-info">
                <img
                  src={Collection}
                  alt="collection"
                  className="product-collection-img"
                />
                <h5 className="product-collection-name">The 140 Collection</h5>
              </div>
            </div>
          </div>
          <div className="product-info">
            <ul className="product-lists">
              <li>Owners</li>
              <li>Bids</li>
              <li>Details</li>
              <li>History</li>
            </ul>
            <div className="product-bids">
              <ProductBidItem
                bidderImg={Creator}
                bidPrice="Bid 10 wETH"
                bidBy="by domiriganji 11/3/2021, 10:57 AM"
              />
              <ProductBidItem
                bidderImg={Creator}
                bidPrice="Bid 10 wETH"
                bidBy="by domiriganji 11/3/2021, 10:57 AM"
              />
              <ProductBidItem
                bidderImg={Creator}
                bidPrice="Bid 10 wETH"
                bidBy="by domiriganji 11/3/2021, 10:57 AM"
              />
            </div>
            <div className="product-place-bid">
              <div className="product-highest-bid">
                <img
                  src={Creator}
                  alt="user-avatar"
                  className="product-place-bid-user-img"
                />
                <div className="product-bidder-info">
                  <p className="product-bidder">
                    Highest bid by <span>Richard Alpert</span>
                  </p>
                  <p className="product-bidder-price">
                    <span>1.1 wETH</span> $4,925 for 1 edition
                  </p>
                </div>
              </div>
              <div className="product-btns-wrapper">
                <button
                  className="product-btn-place-bid"
                  onClick={() => setPlaceBid(true)}
                >
                  Place a bid
                </button>
                <button
                  className="product-btn-place-purchase"
                  onClick={() => setFollowSteps(true)}
                >
                  Purchase Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Popups */}
        {/* Place a bid Popup */}
        {/* pab - place a bid */}
        <div
          className="pab-bg"
          style={{ display: `${placeBid ? "flex" : "none"}` }}
        >
          <div className="pab-container">
            <div className="pab-title-wrapper">
              <h4 className="pab-title">Place a bid</h4>
              <div
                className="pab-close-icon"
                onClick={() => setPlaceBid(false)}
              >
                <MdClose />
              </div>
            </div>
            <p className="pab-text">
              You are about to place a bid for dddd by furkanmia
            </p>
            <p className="pab-bid-text">Your bid</p>
            <div className="pab-input-wrapper">
              <div className="pab-eth-icon-wrapper">
                <FaEthereum />
                <span>ETH</span>
              </div>
              <input type="text" placeholder="110.566" className="pab-input" />
              <p className="pab-num-total">$12,255,123.00</p>
            </div>
            <div className="pab-check-wrapper">
              <input type="checkbox" className="pab-checkbox" />
              <p>By checking this box, I agree to OpenSea's Terms of Service</p>
            </div>
            <div className="pab-btn-wrapper">
              <button className="pab-btn" onClick={() => setPlaceBid(false)}>
                Place a bid
              </button>
            </div>
          </div>
        </div>

        {/* Follow Steps Popup */}
        {/* fs - follow-steps */}
        <div
          className="fs-bg"
          style={{ display: `${followSteps ? "flex" : "none"}` }}
        >
          <div className="fs-container">
            <div className="fs-title-wrapper">
              <h4 className="fs-title">Follow Steps</h4>
              <div
                className="fs-close-icon"
                onClick={() => setFollowSteps(false)}
              >
                <MdClose />
              </div>
            </div>
            <div className="fs-items">
              <div className="fs-item-deposit">
                <IoCheckmarkCircleSharp className="checkmark-deposit-icon" />
                <p className="fs-deposit-title">Deposit</p>
                <p className="fs-deposit-text">
                  Send transaction with your wallet
                </p>
                <button className="fs-deposit-btn">Start Now</button>
              </div>
              <div className="fs-item-approve">
                <IoCheckmarkCircleSharp className="checkmark-approve-icon" />
                <p className="fs-approve-title">Approve</p>
                <p className="fs-approve-text">
                  Checking balance and approving
                </p>
                <button className="fs-approve-btn">Start Now</button>
              </div>
              <div className="fs-item-signature">
                <IoCheckmarkCircleSharp className="checkmark-signature-icon" />
                <p className="fs-signature-title">Signature</p>
                <p className="fs-signatute-text">
                  Create a signature to place a bit
                </p>
                <button className="fs-signature-btn">Start Now</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductIdScreen;
