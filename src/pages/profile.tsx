import "../styles/profile.css";
import UserAvatar from "../assets/images/user-avatar.jpg";
import Web from "../assets/icons/Web.png";
import Share from "../assets/icons/Share.png";
import Settings from "../assets/icons/More.png";
import { RxCopy } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import Sidebar from "../components/Sidebar";
import Grid from "../assets/icons/grid.png";
import ProductItem from "../components/ProductItem";
import Art from "../assets/images/art.jpg";
import ActivityListItem from "../components/ActivityListItem";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {};

const ProfileScreen = ({}: Props) => {
  const [category, setCategory] = useState<number>(1);
  const [readMore, setReadMore] = useState<boolean>(false);
  return (
    <div className="profile-container">
      <Header />
      <main>
        <div className="profile-bg-cover">
          <img
            src={UserAvatar}
            alt="user-avatar"
            className="profile-user-img"
          />
        </div>
        <section className="section-profile">
          <div className="profile-icons-wrapper">
            <Link to="/explore">
              <img src={Web} alt="web-icon" className="profile-web-icon" />
            </Link>
            <div>
              <label htmlFor="share">
                <img src={Share} alt="share-icon" className="profile-share-icon" />
              </label>
              <input id="share" type="file" className="profile-share-input" />
              <Link to="/profile-settings">
                <img
                  src={Settings}
                  alt="more-icon"
                  className="profile-settings-icon"
                />
              </Link>
            </div>
          </div>
          <h1 className="profile-username">Jonathon Doe</h1>
          {category === 1 ? (
            <div className="profile-user-id">
              <p>0xc4c16a125..b21a</p>
              <RxCopy className="rx-copy-icon" />
            </div>
          ) : (
            <div>
              <p className="profile-user-text">
                Created by <span>Jonathan Doe</span>
              </p>
              <ul className="profile-collection-info">
                <li className="profille-collection-items">
                  <h4>7.5K</h4>
                  <span>Items</span>
                </li>
                <li className="profile-collection-owners">
                  <h4>3.5K</h4>
                  <span>Owners</span>
                </li>
                <li className="profile-collection-floor-price">
                  <div className="profile-floor-price-nums">
                    <FaEthereum className="fa-ethereum-icon" />
                    <h4>3.5K</h4>
                  </div>
                  <span>Floor Price</span>
                </li>
                <li className="profile-collection-volume">
                  <div className="profile-collection-volume-nums">
                    <FaEthereum className="fa-ethereum-icon" />
                    <h4>43.5K</h4>
                  </div>
                  <span>Volume Trade</span>
                </li>
              </ul>
            </div>
          )}
          <p className="profile-about-user">
            Pavel Sokov is a renowned portrait painter. When he was 24 years
            old, Sokov was approached by Time to paint the cover of the
            Time's....
            {readMore && (
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
                facilis. Architecto dolorum soluta optio modi in dolores ipsam
                aliquid iure sint nulla, nemo dolor pariatur laboriosam nobis
                aliquam. Tenetur, enim!
              </p>
            )}
            <span>
              {readMore ? (
                <span onClick={() => setReadMore(false)}>See Less</span>
              ) : (
                <span onClick={() => setReadMore(true)}>Read More</span>
              )}
            </span>
          </p>
          <div className="profile-followers">
            <p>513 followers</p>
            <p>213 followers</p>
          </div>

          <div className="profile-two-columns">
            <Sidebar />
            {/* pc2 - profile-col-2 */}
            <div className="pc2">
              <ul className="pc2-list">
                <li
                  onClick={() => setCategory(1)}
                  style={{
                    borderBottom: `${
                      category === 1 ? "2px solid var(--clr-strawberry)" : ""
                    }`,
                  }}
                >
                  On Sale
                </li>
                <li
                  onClick={() => setCategory(2)}
                  style={{
                    borderBottom: `${
                      category === 2 ? "2px solid var(--clr-strawberry)" : ""
                    }`,
                  }}
                >
                  Items
                </li>
                <li
                  onClick={() => setCategory(3)}
                  style={{
                    borderBottom: `${
                      category === 3 ? "2px solid var(--clr-strawberry)" : ""
                    }`,
                  }}
                >
                  Activity
                </li>
              </ul>
              <div className="pc2-input-selects">
                <div className="pc2-input-wrapper">
                  <BiSearch className="bi-search-icon" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="pc2-input"
                  />
                </div>
                <select className="pc2-select-1">
                  <option>Single items</option>
                </select>
                <select className="pc2-select-1">
                  <option>Sort by</option>
                </select>
                <img src={Grid} alt="grid-icon" className="pc2-grid-icon" />
              </div>
              {category === 1 ? (
                <div className="pc2-items">
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
                </div>
              ) : (
                category === 2 && (
                  // Show on Items
                  <div className="pc2-items">
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
                  </div>
                )
              )}
              {/* Show on activity */}
              {category === 3 && (
                <div className="pc2-items-activity">
                  <table className="pc2-table">
                    {/* Header Table */}
                    <tr>
                      <th></th>
                      <th>
                        <p>Item</p>
                      </th>
                      <th>
                        <p>Price</p>
                      </th>
                      <th>
                        <p>Quantity</p>
                      </th>
                      <th>
                        <p>From</p>
                      </th>
                      <th>
                        <p>To</p>
                      </th>
                      <th>
                        <p>Time</p>
                      </th>
                    </tr>
                    {/* Body Table */}
                    <ActivityListItem
                      punkImg={Art}
                      punkName="Top Dog #1234"
                      price="133.87"
                      quantity="01"
                      from="39690"
                      to="....."
                      time="12s ago"
                    />
                    <ActivityListItem
                      punkImg={Art}
                      punkName="Top Dog #1234"
                      price="133.87"
                      quantity="01"
                      from="39690"
                      to="....."
                      time="12s ago"
                    />
                    <ActivityListItem
                      punkImg={Art}
                      punkName="Top Dog #1234"
                      price="133.87"
                      quantity="01"
                      from="39690"
                      to="....."
                      time="12s ago"
                    />
                    <ActivityListItem
                      punkImg={Art}
                      punkName="Top Dog #1234"
                      price="133.87"
                      quantity="01"
                      from="39690"
                      to="....."
                      time="12s ago"
                    />
                    <ActivityListItem
                      punkImg={Art}
                      punkName="Top Dog #1234"
                      price="133.87"
                      quantity="01"
                      from="39690"
                      to="....."
                      time="12s ago"
                    />
                    <ActivityListItem
                      punkImg={Art}
                      punkName="Top Dog #1234"
                      price="133.87"
                      quantity="01"
                      from="39690"
                      to="....."
                      time="12s ago"
                    />
                    <ActivityListItem
                      punkImg={Art}
                      punkName="Top Dog #1234"
                      price="133.87"
                      quantity="01"
                      from="39690"
                      to="....."
                      time="12s ago"
                    />
                    <ActivityListItem
                      punkImg={Art}
                      punkName="Top Dog #1234"
                      price="133.87"
                      quantity="01"
                      from="39690"
                      to="....."
                      time="12s ago"
                    />
                    <ActivityListItem
                      punkImg={Art}
                      punkName="Top Dog #1234"
                      price="133.87"
                      quantity="01"
                      from="39690"
                      to="....."
                      time="12s ago"
                    />
                    <ActivityListItem
                      punkImg={Art}
                      punkName="Top Dog #1234"
                      price="133.87"
                      quantity="01"
                      from="39690"
                      to="....."
                      time="12s ago"
                    />
                    <ActivityListItem
                      punkImg={Art}
                      punkName="Top Dog #1234"
                      price="133.87"
                      quantity="01"
                      from="39690"
                      to="....."
                      time="12s ago"
                    />
                    <ActivityListItem
                      punkImg={Art}
                      punkName="Top Dog #1234"
                      price="133.87"
                      quantity="01"
                      from="39690"
                      to="....."
                      time="12s ago"
                    />
                    <ActivityListItem
                      punkImg={Art}
                      punkName="Top Dog #1234"
                      price="133.87"
                      quantity="01"
                      from="39690"
                      to="....."
                      time="12s ago"
                    />
                    <ActivityListItem
                      punkImg={Art}
                      punkName="Top Dog #1234"
                      price="133.87"
                      quantity="01"
                      from="39690"
                      to="....."
                      time="12s ago"
                    />
                    <ActivityListItem
                      punkImg={Art}
                      punkName="Top Dog #1234"
                      price="133.87"
                      quantity="01"
                      from="39690"
                      to="....."
                      time="12s ago"
                    />
                    <ActivityListItem
                      punkImg={Art}
                      punkName="Top Dog #1234"
                      price="133.87"
                      quantity="01"
                      from="39690"
                      to="....."
                      time="12s ago"
                    />
                    <ActivityListItem
                      punkImg={Art}
                      punkName="Top Dog #1234"
                      price="133.87"
                      quantity="01"
                      from="39690"
                      to="....."
                      time="12s ago"
                    />
                    <ActivityListItem
                      punkImg={Art}
                      punkName="Top Dog #1234"
                      price="133.87"
                      quantity="01"
                      from="39690"
                      to="....."
                      time="12s ago"
                    />
                    <ActivityListItem
                      punkImg={Art}
                      punkName="Top Dog #1234"
                      price="133.87"
                      quantity="01"
                      from="39690"
                      to="....."
                      time="12s ago"
                    />
                    <ActivityListItem
                      punkImg={Art}
                      punkName="Top Dog #1234"
                      price="133.87"
                      quantity="01"
                      from="39690"
                      to="....."
                      time="12s ago"
                    />
                  </table>
                </div>
              )}
              <div className="profile-btn-wrapper">
                <button className="profile-btn">View More</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProfileScreen;
