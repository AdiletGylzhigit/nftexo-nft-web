import "../styles/profile-settings.css";
import { AiOutlineSetting } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { GoLinkExternal } from "react-icons/go";
import { MdOutlineNotifications } from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";
import { BsQuestionCircle } from "react-icons/bs";
import { WiDayShowers } from "react-icons/wi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, Link, NavLink } from "react-router-dom";

type Props = {};

const ProfileSettingsScreen = ({}: Props) => {
  return (
    // ps - profile-settings
    <div className="ps-container">
      <Header />
      <main>
        <div className="ps-col-1">
          <div className="ps-col-1-item">
            <AiOutlineSetting className="ps-col-1-item-icon" />
            <h5>Settings</h5>
          </div>
          <NavLink
            to="profile"
            className={({ isActive, isPending }) =>
              isActive ? "active-profile-category" : isPending ? "pending" : ""
            }
          >
            <div className="ps-col-1-item">
              <BiUser className="ps-col-1-item-icon" />
              <h5>Profile</h5>
            </div>
          </NavLink>
          <NavLink
            to="links"
            className={({ isActive, isPending }) =>
              isActive ? "active-profile-category" : isPending ? "pending" : ""
            }
          >
            <div className="ps-col-1-item">
              <GoLinkExternal className="ps-col-1-item-icon" />
              <h5>Links</h5>
            </div>
          </NavLink>
          <NavLink
            to="notifications"
            className={({ isActive, isPending }) =>
              isActive ? "active-profile-category" : isPending ? "pending" : ""
            }
          >
            <div className="ps-col-1-item">
              <MdOutlineNotifications className="ps-col-1-item-icon" />
              <h5>Motifications</h5>
            </div>
          </NavLink>
          <NavLink
            to="offers"
            className={({ isActive, isPending }) =>
              isActive ? "active-profile-category" : isPending ? "pending" : ""
            }
          >
            <div className="ps-col-1-item">
              <RiPriceTag3Line className="ps-col-1-item-icon" />
              <h5>Offers</h5>
            </div>
          </NavLink>
          <NavLink
            to="appearance"
            className={({ isActive, isPending }) =>
              isActive ? "active-profile-category" : isPending ? "pending" : ""
            }
          >
            <div className="ps-col-1-item">
              <WiDayShowers className="ps-col-1-item-icon" />
              <h5>Appearance</h5>
            </div>
          </NavLink>
          <NavLink
            to="support"
            className={({ isActive, isPending }) =>
              isActive ? "active-profile-category" : isPending ? "pending" : ""
            }
          >
            <div className="ps-col-1-item">
              <BsQuestionCircle className="ps-col-1-item-icon" />
              <h5>Account Support</h5>
            </div>
          </NavLink>
        </div>
        <div className="ps-col-2">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfileSettingsScreen;
