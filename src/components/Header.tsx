import { useState } from "react";
import Logo from "../assets/images/logo.png";
import MetaMask from "../assets/icons/mask.png";
import { BiUser, BiSearch, BiBookOpen } from "react-icons/bi";
import Menu from "../assets/icons/icons8-menu-48.png";
import { MdClose, MdFavoriteBorder } from "react-icons/md";
import Ethereum from "../assets/images/ethereum.jpg";
import { FiDollarSign, FiLogOut } from "react-icons/fi";
import { RxGear } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { CiWallet } from "react-icons/ci";

type Props = {};

const Header = ({}: Props) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [userDrop, setUserDrop] = useState<boolean>(false);
  const [statsDrop, setStatsDrop] = useState<boolean>(false);
  return (
    <header
      className="header-container"
      style={{
        backgroundColor: `${
          toggleMenu ? "transparent" : "rgba(125, 34, 219, 0.5)"
        }`,
      }}
    >
      <div
        className="header-logo-wrapper"
        style={{ display: `${toggleMenu ? "none" : "flex"}` }}
      >
        <Link to="/">
          <img src={Logo} alt="logo" className="header-logo-img" />
        </Link>
        <Link to="/">
          <h1 className="header-logo-title">NFtexo</h1>
        </Link>
      </div>
      <div className="header-input-wrapper">
        <BiSearch className="header-bi-search-icon" />
        <input type="text" placeholder="Search items" />
      </div>
      <nav className="header-nav">
        <h5>
          <NavLink
            to="/explore"
            className={({ isActive, isPending }) =>
              isActive
                ? "active-header-nav"
                : isPending
                ? "pending-header-nav"
                : ""
            }
          >
            Explore
          </NavLink>
        </h5>
        <h5
          onMouseEnter={() => setStatsDrop(true)}
          className={`${statsDrop && "header-stats-active"}`}
        >
          Stats
        </h5>
        <h5>
          <NavLink
            to="/blogs"
            className={({ isActive, isPending }) =>
              isActive
                ? "active-header-nav"
                : isPending
                ? "pending-header-nav"
                : ""
            }
          >
            Resources
          </NavLink>
        </h5>
        <h5>
          <a
            href="https://discord.com/servers/explosif-the-explosif-way-to-mint-buy-sell-nfts-816622381169639424"
            target="_blank"
          >
            Community
          </a>
        </h5>
        <NavLink to="/create-item">
          <button>Create</button>
        </NavLink>
        <div onMouseEnter={() => setUserDrop(true)}>
          <BiUser className="header-bi-user-icon" />
        </div>
        <NavLink to="/connect-wallet">
          <img
            src={MetaMask}
            alt="meta-mask"
            className="header-meta-mask-img"
          />
        </NavLink>
      </nav>

      {/* User Dropdown */}
      {/* ud - user-dropdown */}
      {userDrop && (
        <div className="ud-container" onMouseLeave={() => setUserDrop(false)}>
          <h1 className="ud-username">Johnatan Doe</h1>
          <div className="ud-ballance-info">
            <img src={Ethereum} alt="user-avatar" className="ud-img" />
            <div className="ud-ballance">
              <p>ballance</p>
              <p>133.25 ETH</p>
            </div>
          </div>
          <Link to="/profile">
            <div className="ud-item">
              <BiUser className="ud-item-icon" />
              <h4>My Profile</h4>
            </div>
          </Link>
          <div className="ud-item">
            <FiDollarSign className="ud-item-icon" />
            <h4>Manage Funds</h4>
          </div>
          <div className="ud-item">
            <BiBookOpen className="ud-item-icon" />
            <h4>My Collections</h4>
          </div>
          <div className="ud-item">
            <MdFavoriteBorder className="ud-item-icon" />
            <h4>Favorites</h4>
          </div>
          <Link to="/profile-settings">
            <div className="ud-item">
              <RxGear className="ud-item-icon" />
              <h4>Settings</h4>
            </div>
          </Link>
          <div className="ud-item">
            <FiLogOut className="ud-item-icon" />
            <Link to="/login">
              <h4>Log Out</h4>
            </Link>
          </div>
        </div>
      )}

      {/* Stats Dropdown */}
      {/* sd - stats-dropdown */}
      {statsDrop && (
        <div className="sd-container" onMouseLeave={() => setStatsDrop(false)}>
          <h1>
            <NavLink
              to="/stats-rank"
              className={({ isActive, isPending }) =>
                isActive
                  ? "active-header-nav"
                  : isPending
                  ? "pending-header-nav"
                  : ""
              }
            >
              Stats Ranking
            </NavLink>
          </h1>
          <h1>
            <NavLink
              to="/stats-activity"
              className={({ isActive, isPending }) =>
                isActive
                  ? "active-header-nav"
                  : isPending
                  ? "pending-header-nav"
                  : ""
              }
            >
              Stats Activity
            </NavLink>
          </h1>
        </div>
      )}

      {/* Show only on mobile */}
      <img
        src={Menu}
        alt="menu-icon"
        className="header-menu-icon"
        onClick={() => setToggleMenu(true)}
        style={{ display: `${toggleMenu ? "none" : "block"}` }}
      />

      {/* Mobile Dropdown */}
      {/* mbd - mobile-dropdown */}
      <motion.div
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className="mbd-container"
        style={{ display: `${toggleMenu ? "block" : "none"}` }}
      >
        <div className="mbd-title-wrapper">
          <div className="mbd-logo-wrapper">
            <img src={Logo} alt="logo" className="mbd-logo-img" />
            <h1 className="mbd-logo-title">NFtexo</h1>
          </div>
          <span onClick={() => setToggleMenu(false)} className="mbd-close-icon">
            <MdClose />
          </span>
        </div>
        <nav className="mbd-nav">
          <h5>
            <NavLink to="/explore">Explore</NavLink>
          </h5>
          <h5>
            <NavLink to="/stats-rank">Stats</NavLink>
          </h5>
          <h5>
            <NavLink to="/blogs">Resources</NavLink>
          </h5>
          <h5>
            <a
              href="https://discord.com/servers/explosif-the-explosif-way-to-mint-buy-sell-nfts-816622381169639424"
              target="_blank"
            >
              Community
            </a>
          </h5>
          <NavLink to="/create-item">
            <button className="mbd-create-btn">Create</button>
          </NavLink>
          <NavLink to="/profile">
            <div className="mbd-user-icon-wrapper">
              <BiUser className="mbd-user-icon" />
              <h5>Profile</h5>
            </div>
          </NavLink>
          <NavLink to='/connect-wallet'>
            <div className="mbd-wallet-wrapper">
              <CiWallet size={25} className="mbd-wallet-icon" />
              <h5>Wallet</h5>
            </div>
          </NavLink>
          <NavLink to='/login'>
            <div>
              <h5>Logout</h5>
            </div>
          </NavLink>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
