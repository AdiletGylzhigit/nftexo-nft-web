import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/home.css";
import HeroPunk1 from "../assets/images/hero-punk1.jpg";
import HeroPunk2 from "../assets/images/hero-punk2.jpg";
import UserAvatar from "../assets/images/user-avatar.jpg";
import ProductItem from "../components/ProductItem";
import Art from "../assets/images/art.jpg";
import PreviewProduct from "../components/PreviewProduct";
import CollectionItem from "../components/CollectionItem";
import CreditCard from "../assets/icons/card.png";
import Vault from "../assets/icons/vault.png";
import Plus from "../assets/icons/plus.png";
import Properties from "../assets/icons/properties.png";
import CommentItem from "../components/CommentItem";
import Company1 from "../assets/images/company1.png";
import Company2 from "../assets/images/company2.png";
import Company3 from "../assets/images/company3.png";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

type Props = {};

const HomeScreen = ({}: Props) => {
  const [more, setMore] = useState<boolean>(false);
  return (
    <div className="home-container">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-container">
          <div className="hero-even-columns">
            <div className="hero-even-columns-child-1">
              <h1 className="hero-title">Explore, Collect, and Sell NFTs</h1>
              <p className="hero-text">
                On the world's Best & largest NFT marketplace
              </p>
              <div className="hero-btns">
                <Link to="/explore">
                  <button className="hero-btn-1">Explore</button>
                </Link>
                <Link to="/create-item">
                  <button className="hero-btn-2">Create</button>
                </Link>
              </div>
            </div>
            <div className="hero-even-columns-child-2">
              <Link to="/explore/gh26sh1">
                <PreviewProduct
                  previewImg={HeroPunk1}
                  userImg={UserAvatar}
                  username="User Centered"
                  price="80.880"
                />
              </Link>
              <Link to="/explore/gh26sh1">
                <PreviewProduct
                  previewImg={HeroPunk2}
                  userImg={UserAvatar}
                  username="User Centered"
                  price="80.880"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Live auctions Section */}
        <section>
          <div className="auction-container">
            <div className="auction-title-wrapper">
              <h2 className="auction-title">Live auctions</h2>
              <div className="auction-icons-wrapper">
                <BsFillArrowLeftCircleFill className="auction-arrow-left-icon" />
                <BsFillArrowRightCircleFill className="auction-arrow-right-icon" />
              </div>
            </div>
            <div className="auction-items">
              {/* Render product here */}
              <Link to="/explore/a6dwg61">
                <ProductItem
                  productImg={Art}
                  userImg={UserAvatar}
                  username="User Artist"
                  daysLeft="12"
                  hoursLeft="7"
                  productName="The Rusty Robot"
                  price="1.05"
                  likes="40"
                />
              </Link>
              <Link to="/explore/a6dwg61">
                <ProductItem
                  productImg={Art}
                  userImg={UserAvatar}
                  username="User Artist"
                  daysLeft="12"
                  hoursLeft="7"
                  productName="The Rusty Robot"
                  price="1.05"
                  likes="40"
                />
              </Link>
              <Link to="/explore/a6dwg61">
                <ProductItem
                  productImg={Art}
                  userImg={UserAvatar}
                  username="User Artist"
                  daysLeft="12"
                  hoursLeft="7"
                  productName="The Rusty Robot"
                  price="1.05"
                  likes="40"
                />
              </Link>
              <Link to="/explore/a6dwg61">
                <ProductItem
                  productImg={Art}
                  userImg={UserAvatar}
                  username="User Artist"
                  daysLeft="12"
                  hoursLeft="7"
                  productName="The Rusty Robot"
                  price="1.05"
                  likes="40"
                />
              </Link>
              {/* Show only when clicked View More */}
              {more && (
                <>
                  <Link to="/explore/a6dwg61">
                    <ProductItem
                      productImg={Art}
                      userImg={UserAvatar}
                      username="User Artist"
                      daysLeft="12"
                      hoursLeft="7"
                      productName="The Rusty Robot"
                      price="1.05"
                      likes="40"
                    />
                  </Link>
                  <Link to="/explore/a6dwg61">
                    <ProductItem
                      productImg={Art}
                      userImg={UserAvatar}
                      username="User Artist"
                      daysLeft="12"
                      hoursLeft="7"
                      productName="The Rusty Robot"
                      price="1.05"
                      likes="40"
                    />
                  </Link>
                  <Link to="/explore/a6dwg61">
                    <ProductItem
                      productImg={Art}
                      userImg={UserAvatar}
                      username="User Artist"
                      daysLeft="12"
                      hoursLeft="7"
                      productName="The Rusty Robot"
                      price="1.05"
                      likes="40"
                    />
                  </Link>
                  <Link to="/explore/a6dwg61">
                    <ProductItem
                      productImg={Art}
                      userImg={UserAvatar}
                      username="User Artist"
                      daysLeft="12"
                      hoursLeft="7"
                      productName="The Rusty Robot"
                      price="1.05"
                      likes="40"
                    />
                  </Link>
                </>
              )}
            </div>
            <div className="auction-btn-wrapper">
              <button className="auction-btn" onClick={() => setMore(true)}>
                View More
              </button>
            </div>
          </div>
        </section>

        {/* Top collection Section */}
        <section>
          <div className="collection-container">
            <div className="collection-title-wrapper">
              <h1 className="collection-title">Top Collections</h1>
              <select className="collection-select">
                <option>Last 1 day</option>
                <option>Last 7 day</option>
                <option>Last 1 Month</option>
                <option>Last 6 Month</option>
                <option>Last 1 Year</option>
              </select>
            </div>
            <div className="collection-items">
              {/* Render User Seller here */}
              <CollectionItem
                order="01"
                sellerImg={UserAvatar}
                username="Savannah Nguyen"
                price="219.78"
              />
              <CollectionItem
                order="01"
                sellerImg={UserAvatar}
                username="Savannah Nguyen"
                price="219.78"
              />
              <CollectionItem
                order="01"
                sellerImg={UserAvatar}
                username="Savannah Nguyen"
                price="219.78"
              />
              <CollectionItem
                order="01"
                sellerImg={UserAvatar}
                username="Savannah Nguyen"
                price="219.78"
              />
              <CollectionItem
                order="01"
                sellerImg={UserAvatar}
                username="Savannah Nguyen"
                price="219.78"
              />
              <CollectionItem
                order="01"
                sellerImg={UserAvatar}
                username="Savannah Nguyen"
                price="219.78"
              />
              <CollectionItem
                order="01"
                sellerImg={UserAvatar}
                username="Savannah Nguyen"
                price="219.78"
              />
              <CollectionItem
                order="01"
                sellerImg={UserAvatar}
                username="Savannah Nguyen"
                price="219.78"
              />
              <CollectionItem
                order="01"
                sellerImg={UserAvatar}
                username="Savannah Nguyen"
                price="219.78"
              />
              <CollectionItem
                order="01"
                sellerImg={UserAvatar}
                username="Savannah Nguyen"
                price="219.78"
              />
              <CollectionItem
                order="01"
                sellerImg={UserAvatar}
                username="Savannah Nguyen"
                price="219.78"
              />
              <CollectionItem
                order="01"
                sellerImg={UserAvatar}
                username="Savannah Nguyen"
                price="219.78"
              />
              <CollectionItem
                order="01"
                sellerImg={UserAvatar}
                username="Savannah Nguyen"
                price="219.78"
              />
              <CollectionItem
                order="01"
                sellerImg={UserAvatar}
                username="Savannah Nguyen"
                price="219.78"
              />
              <CollectionItem
                order="01"
                sellerImg={UserAvatar}
                username="Savannah Nguyen"
                price="219.78"
              />
              <CollectionItem
                order="01"
                sellerImg={UserAvatar}
                username="Savannah Nguyen"
                price="219.78"
              />
            </div>
          </div>
        </section>

        {/* NFT Business Process Section */}
        {/* bp - business-process */}
        <section>
          <div className="bp-container">
            <h1 className="bp-title">NFT Business Process</h1>

            <div className="bp-items">
              <div className="bp-item">
                <img src={CreditCard} alt="credit-card" className="bp-icon" />
                <h4 className="bp-item-title">Set up your wallet</h4>
                <p className="bp-text">
                  Once you've set up your wallet of choice, connect it to MNFT
                  by clicking the wallet icon in the top right corner.
                </p>
              </div>
              <div className="bp-item">
                <img src={Vault} alt="vault" className="bp-icon" />
                <h4 className="bp-item-title">Set up your wallet</h4>
                <p className="bp-text">
                  Once you've set up your wallet of choice, connect it to MNFT
                  by clicking the wallet icon in the top right corner.
                </p>
              </div>
              <div className="bp-item">
                <img src={Plus} alt="plus" className="bp-icon" />
                <h4 className="bp-item-title">Set up your wallet</h4>
                <p className="bp-text">
                  Once you've set up your wallet of choice, connect it to MNFT
                  by clicking the wallet icon in the top right corner.
                </p>
              </div>
              <div className="bp-item">
                <img src={Properties} alt="properties" className="bp-icon" />
                <h4 className="bp-item-title">Set up your wallet</h4>
                <p className="bp-text">
                  Once you've set up your wallet of choice, connect it to MNFT
                  by clicking the wallet icon in the top right corner.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Section */}
        <section>
          <div className="explore-container">
            <h1 className="explore-title">Explore</h1>
            <div className="explore-selects-wrapper">
              <select className="explore-select">
                <option>Photography</option>
              </select>
              <select className="explore-select">
                <option>Low Price</option>
              </select>
              <select className="explore-select">
                <option>Price Range</option>
              </select>
              <select className="explore-select">
                <option>Creators</option>
              </select>
              <select className="explore-select">
                <option>Recently added</option>
              </select>
            </div>
            <div className="explore-row-2">
              <Link to="/explore/a6dwg61">
                <ProductItem
                  productImg={Art}
                  userImg={UserAvatar}
                  username="User Artist"
                  daysLeft="12"
                  hoursLeft="7"
                  productName="The Rusty Robot"
                  price="1.05"
                  likes="40"
                />
              </Link>
              <Link to="/explore/a6dwg61">
                <ProductItem
                  productImg={Art}
                  userImg={UserAvatar}
                  username="User Artist"
                  daysLeft="12"
                  hoursLeft="7"
                  productName="The Rusty Robot"
                  price="1.05"
                  likes="40"
                />
              </Link>
              <Link to="/explore/a6dwg61">
                <ProductItem
                  productImg={Art}
                  userImg={UserAvatar}
                  username="User Artist"
                  daysLeft="12"
                  hoursLeft="7"
                  productName="The Rusty Robot"
                  price="1.05"
                  likes="40"
                />
              </Link>
              <Link to="/explore/a6dwg61">
                <ProductItem
                  productImg={Art}
                  userImg={UserAvatar}
                  username="User Artist"
                  daysLeft="12"
                  hoursLeft="7"
                  productName="The Rusty Robot"
                  price="1.05"
                  likes="40"
                />
              </Link>
              <Link to="/explore/a6dwg61">
                <ProductItem
                  productImg={Art}
                  userImg={UserAvatar}
                  username="User Artist"
                  daysLeft="12"
                  hoursLeft="7"
                  productName="The Rusty Robot"
                  price="1.05"
                  likes="40"
                />
              </Link>
              <Link to="/explore/a6dwg61">
                <ProductItem
                  productImg={Art}
                  userImg={UserAvatar}
                  username="User Artist"
                  daysLeft="12"
                  hoursLeft="7"
                  productName="The Rusty Robot"
                  price="1.05"
                  likes="40"
                />
              </Link>
              <Link to="/explore/a6dwg61">
                <ProductItem
                  productImg={Art}
                  userImg={UserAvatar}
                  username="User Artist"
                  daysLeft="12"
                  hoursLeft="7"
                  productName="The Rusty Robot"
                  price="1.05"
                  likes="40"
                />
              </Link>
              <Link to="/explore/a6dwg61">
                <ProductItem
                  productImg={Art}
                  userImg={UserAvatar}
                  username="User Artist"
                  daysLeft="12"
                  hoursLeft="7"
                  productName="The Rusty Robot"
                  price="1.05"
                  likes="40"
                />
              </Link>
            </div>
            <div className="explore-btn-wrapper">
              <button className="explore-btn">View More</button>
            </div>
          </div>
        </section>

        {/* NFT Trut and Safety Section */}
        {/* ts - trust-safety */}
        <section>
          <div className="ts-container">
            <h1 className="ts-title">NFT Trust and Safety</h1>
            <div className="ts-items">
              <CommentItem
                commentText="Et scaevola delicata vix, mea invidunt indoctum, quodsi eripuit definiebas at pri. Placerat voltaria ex mel. Eos malis Et scaevola delicata vix, mea ei invidunt indoctum. "
                userImg={UserAvatar}
                username="Darlene Robertson"
                designation="Product Designer"
              />
              <CommentItem
                commentText="Et scaevola delicata vix, mea invidunt indoctum, quodsi eripuit definiebas at pri. Placerat voltaria ex mel. Eos malis Et scaevola delicata vix, mea ei invidunt indoctum. "
                userImg={UserAvatar}
                username="Darlene Robertson"
                designation="Product Designer"
              />
              <CommentItem
                commentText="Et scaevola delicata vix, mea invidunt indoctum, quodsi eripuit definiebas at pri. Placerat voltaria ex mel. Eos malis Et scaevola delicata vix, mea ei invidunt indoctum. "
                userImg={UserAvatar}
                username="Darlene Robertson"
                designation="Product Designer"
              />
              <CommentItem
                commentText="Et scaevola delicata vix, mea invidunt indoctum, quodsi eripuit definiebas at pri. Placerat voltaria ex mel. Eos malis Et scaevola delicata vix, mea ei invidunt indoctum. "
                userImg={UserAvatar}
                username="Darlene Robertson"
                designation="Product Designer"
              />
            </div>
          </div>
        </section>

        {/* Learn and Earn Free ETH with NFT Section */}
        <section>
          <div className="eth-container">
            <div className="eth-logos-wrapper">
              <img src={Company1} alt="logo" className="eth-logo-img" />
              <img src={Company2} alt="logo" className="eth-logo-img" />
              <img src={Company1} alt="logo" className="eth-logo-img" />
              <img src={Company3} alt="logo" className="eth-logo-img" />
              <img src={Company1} alt="logo" className="eth-logo-img" />
            </div>
            <div className="eth-row-2">
              <div className="eth-row-2-col-1">
                <h1 className="eth-title">Learn and Earn Free ETH with NFT</h1>
                <p className="eth-text">
                  A creative nft business agency that lead & inspire
                </p>
                <div className="eth-btns">
                  <Link to="/create-item">
                    <button className="eth-btn-create">Create Item</button>
                  </Link>
                  <Link to="/explore">
                    <button className="eth-btn-explore">Explore More</button>
                  </Link>
                </div>
              </div>
              <div className="eth-row-2-col-2">
                <Link to="/explore/512e61">
                  <PreviewProduct
                    previewImg={HeroPunk1}
                    userImg={UserAvatar}
                    username="User Centered"
                    price="80.880"
                  />
                </Link>
                <Link to="/explore/512e61">
                  <PreviewProduct
                    previewImg={HeroPunk1}
                    userImg={UserAvatar}
                    username="User Centered"
                    price="80.880"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomeScreen;
