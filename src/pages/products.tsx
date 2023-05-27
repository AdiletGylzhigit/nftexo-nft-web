import "../styles/products.css";
import Sidebar from "../components/Sidebar";
import Grid from "../assets/icons/grid.png";
import ProductItem from "../components/ProductItem";
import UserAvatar from "../assets/images/user-avatar.jpg";
import Art from "../assets/images/art.jpg";

import { BiSearch } from "react-icons/bi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

type Props = {};

const ProductsScreen = ({}: Props) => {
  return (
    // p - products
    <div className="p-container">
      <Header />
      <main>
        <div className="p-col-1">
          <Sidebar />
        </div>
        {/* Show only on on Mobile */}
        <div className="p-mobile-search">
          <div className="p-mobile-search-wrapper">
            <BiSearch className="p-search-icon" />
            <input
              type="text"
              placeholder="Search"
              className="p-mobile-search-input"
            />
          </div>
        </div>

        <div className="p-col-2">
          <div className="p-results-sort-wrapper">
            <p className="p-results-title">22,133,154 results</p>
            <div className="p-sort-wrapper">
              <select className="p-sort-select">
                <option>Sort By</option>
              </select>
              <img src={Grid} alt="grid-icon" className="p-grid-icon" />
            </div>
          </div>
          <div className="p-items">
            <Link to="/explore/12ie19">
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
            <Link to="/explore/12ie19">
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
            <Link to="/explore/12ie19">
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
            <Link to="/explore/12ie19">
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
            <Link to="/explore/12ie19">
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
            <Link to="/explore/12ie19">
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
            <Link to="/explore/12ie19">
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
            <Link to="/explore/12ie19">
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
            <Link to="/explore/12ie19">
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
            <Link to="/explore/12ie19">
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
            <Link to="/explore/12ie19">
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
            <Link to="/explore/12ie19">
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
            <Link to="/explore/12ie19">
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
            <Link to="/explore/12ie19">
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
            <Link to="/explore/12ie19">
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
          <div className="p-btn-wrapper">
            <button className="p-btn">View More</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsScreen;
