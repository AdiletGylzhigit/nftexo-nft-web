import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import SellerImg from "../assets/images/user-avatar.jpg";
import Ethereum from "../assets/images/ethereum.jpg";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

type Props = {};

const Sidebar = ({}: Props) => {
  const [toggleStatus, setToggleStatus] = useState<boolean>(true);
  const [toggleAll, setToggleAll] = useState<boolean>(true);
  const [togglePrice, setTogglePrice] = useState<boolean>(true);
  const [toggleCollections, setToggleCollections] = useState<boolean>(true);
  const [toggleCategories, setToggleCategories] = useState<boolean>(true);
  const [toggleChain, setToggleChain] = useState<boolean>(false);
  const [toggleAccessory, setToggleAccessory] = useState<boolean>(false);
  const [toggleBgColor, setToggleBgColor] = useState<boolean>(false);
  const [toggleCustom, setToggleCustom] = useState<boolean>(false);
  const [toggleEyes, setToggleEyes] = useState<boolean>(false);
  const [toggleHead, setToggleHead] = useState<boolean>(false);

  return (
    <div className="sidebar-container">
      {/* Filter Section */}
      <section>
        <div className="filter-wrapper">
          <div className="filter-title-wrapper">
            <FiFilter />
            <h4>Filter</h4>
          </div>
          <Link to="/">
            <AiOutlineArrowLeft />
          </Link>
        </div>
      </section>

      {/* Status Section */}
      <section>
        <div className="sidebar-wrapper">
          <div className="sidebar-title-wrapper">
            <h4>Status</h4>
            {toggleStatus ? (
              <div onClick={() => setToggleStatus(false)}>
                <AiOutlineArrowUp className="sidebar-arrow-up-icon" />
              </div>
            ) : (
              <div onClick={() => setToggleStatus(true)}>
                <AiOutlineArrowDown className="sidebar-arrow-down-icon" />
              </div>
            )}
          </div>
          {toggleStatus ? (
            <>
              <div className="status-btns">
                <button className="status-btn-1">New</button>
                <button className="status-btn-2">On Auction</button>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </section>

      {/* All Items Section */}
      <section>
        <div className="sidebar-wrapper">
          <div className="sidebar-title-wrapper">
            <h4>All</h4>
            {toggleAll ? (
              <div onClick={() => setToggleAll(false)}>
                <AiOutlineArrowUp className="sidebar-arrow-up-icon" />
              </div>
            ) : (
              <div onClick={() => setToggleAll(true)}>
                <AiOutlineArrowDown className="sidebar-arrow-down-icon" />
              </div>
            )}
          </div>
          {toggleAll ? (
            <>
              <div className="all-item-btns">
                <button className="all-items-btn-1">Single</button>
                <button className="all-items-btn-2">Bundle</button>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </section>

      {/* Price Section */}
      <section>
        <div className="sidebar-wrapper">
          <div className="sidebar-title-wrapper">
            <h4>Price</h4>
            {togglePrice ? (
              <div onClick={() => setTogglePrice(false)}>
                <AiOutlineArrowUp className="sidebar-arrow-up-icon" />
              </div>
            ) : (
              <div onClick={() => setTogglePrice(true)}>
                <AiOutlineArrowDown className="sidebar-arrow-down-icon" />
              </div>
            )}
          </div>
          {togglePrice ? (
            <>
              <div className="price-inputs-wrapper">
                <input
                  type="text"
                  placeholder="$USD"
                  className="price-usd-input"
                />
                <div className="price-min-max-wrapper">
                  <input
                    type="text"
                    placeholder="Min"
                    className="price-input-min"
                  />
                  <input
                    type="text"
                    placeholder="Max"
                    className="price-input-max"
                  />
                </div>
              </div>
              <button className="price-btn">Apply</button>
            </>
          ) : (
            <></>
          )}
        </div>
      </section>

      {/* Collections Section */}
      <section>
        <div className="sidebar-wrapper">
          <div className="sidebar-title-wrapper">
            <h4>Collections</h4>
            {toggleCollections ? (
              <div onClick={() => setToggleCollections(false)}>
                <AiOutlineArrowUp className="sidebar-arrow-up-icon" />
              </div>
            ) : (
              <div onClick={() => setToggleCollections(true)}>
                <AiOutlineArrowDown className="sidebar-arrow-down-icon" />
              </div>
            )}
          </div>
          {toggleCollections ? (
            <>
              <div className="sidebar-input-wrapper">
                <BiSearch className="sidebar-search-icon" />
                <input
                  type="text"
                  placeholder="Search"
                  className="sidebar-input"
                />
              </div>
              <div className="sidebar-items">
                <div className="sidebar-item">
                  <img
                    src={SellerImg}
                    alt="seller-avatar"
                    className="sidebar-img"
                  />
                  <h5>Leslie Alexander</h5>
                </div>
                <div className="sidebar-item">
                  <img
                    src={SellerImg}
                    alt="seller-avatar"
                    className="sidebar-img"
                  />
                  <h5>Guy Hawkins</h5>
                </div>
                <div className="sidebar-item">
                  <img
                    src={SellerImg}
                    alt="seller-avatar"
                    className="sidebar-img"
                  />
                  <h5>Theresa Webb</h5>
                </div>
                <div className="sidebar-item">
                  <img
                    src={SellerImg}
                    alt="seller-avatar"
                    className="sidebar-img"
                  />
                  <h5>Wade Warren</h5>
                </div>
                <div className="sidebar-item">
                  <img
                    src={SellerImg}
                    alt="seller-avatar"
                    className="sidebar-img"
                  />
                  <h5>Devon Lane</h5>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <div className="sidebar-wrapper">
          <div className="sidebar-title-wrapper">
            <h4>Categories</h4>
            {toggleCategories ? (
              <div onClick={() => setToggleCategories(false)}>
                <AiOutlineArrowUp className="sidebar-arrow-up-icon" />
              </div>
            ) : (
              <div onClick={() => setToggleCategories(true)}>
                <AiOutlineArrowDown className="sidebar-arrow-down-icon" />
              </div>
            )}
          </div>
          {toggleCategories ? (
            <>
              <div className="sidebar-input-wrapper">
                <BiSearch className="sidebar-search-icon" />
                <input
                  type="text"
                  placeholder="Search"
                  className="sidebar-input"
                />
              </div>
              <div className="sidebar-items">
                <div className="sidebar-item">
                  <img src={SellerImg} alt="category" className="sidebar-img" />
                  <h5>Illustrations</h5>
                </div>
                <div className="sidebar-item">
                  <img src={SellerImg} alt="category" className="sidebar-img" />
                  <h5>Art</h5>
                </div>
                <div className="sidebar-item">
                  <img src={SellerImg} alt="category" className="sidebar-img" />
                  <h5>Domain Names</h5>
                </div>
                <div className="sidebar-item">
                  <img src={SellerImg} alt="category" className="sidebar-img" />
                  <h5>Trading Cards</h5>
                </div>
                <div className="sidebar-item">
                  <img src={SellerImg} alt="category" className="sidebar-img" />
                  <h5>Collectibles</h5>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </section>

      {/* Chain Section */}
      <section>
        <div className="sidebar-wrapper">
          <div className="sidebar-title-wrapper">
            <h4>Chain</h4>
            {toggleChain ? (
              <div onClick={() => setToggleChain(false)}>
                <AiOutlineArrowUp className="sidebar-arrow-up-icon" />
              </div>
            ) : (
              <div onClick={() => setToggleChain(true)}>
                <AiOutlineArrowDown className="sidebar-arrow-down-icon" />
              </div>
            )}
          </div>
          {toggleChain && (
            <>
              <div className="sidebar-input-wrapper">
                <BiSearch className="sidebar-search-icon" />
                <input
                  type="text"
                  placeholder="Search"
                  className="sidebar-input"
                />
              </div>
              <div className="sidebar-items">
                <div className="sidebar-item">
                  <img src={SellerImg} alt="chain" className="sidebar-img" />
                  <h5>Ethereum</h5>
                </div>
                <div className="sidebar-item">
                  <img src={SellerImg} alt="chain" className="sidebar-img" />
                  <h5>Polygon</h5>
                </div>
                <div className="sidebar-item">
                  <img src={SellerImg} alt="chain" className="sidebar-img" />
                  <h5>Klaytn</h5>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Accessory Section */}
      <section>
        <div className="sidebar-wrapper">
          <div className="sidebar-title-wrapper">
            <h4>Accessory</h4>
            {toggleAccessory ? (
              <div onClick={() => setToggleAccessory(false)}>
                <AiOutlineArrowUp className="sidebar-arrow-up-icon" />
              </div>
            ) : (
              <div onClick={() => setToggleAccessory(true)}>
                <AiOutlineArrowDown className="sidebar-arrow-down-icon" />
              </div>
            )}
          </div>
          {toggleAccessory && (
            <>
              <div className="sidebar-input-wrapper">
                <BiSearch className="sidebar-search-icon" />
                <input
                  type="text"
                  placeholder="Search"
                  className="sidebar-input"
                />
              </div>
              <div className="sidebar-items">
                <div className="sidebar-item">
                  <img
                    src={SellerImg}
                    alt="accessory"
                    className="sidebar-img"
                  />
                  <h5>Accessory 1</h5>
                </div>
                <div className="sidebar-item">
                  <img
                    src={SellerImg}
                    alt="accessory"
                    className="sidebar-img"
                  />
                  <h5>Accessory 2</h5>
                </div>
                <div className="sidebar-item">
                  <img
                    src={SellerImg}
                    alt="accessory"
                    className="sidebar-img"
                  />
                  <h5>Accessory 3</h5>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Background Color Section */}
      <section>
        <div className="sidebar-wrapper">
          <div className="sidebar-title-wrapper">
            <h4>Background Color</h4>
            {toggleBgColor ? (
              <div onClick={() => setToggleBgColor(false)}>
                <AiOutlineArrowUp className="sidebar-arrow-up-icon" />
              </div>
            ) : (
              <div onClick={() => setToggleBgColor(true)}>
                <AiOutlineArrowDown className="sidebar-arrow-down-icon" />
              </div>
            )}
          </div>
          {toggleBgColor && (
            <>
              <div className="sidebar-input-wrapper">
                <BiSearch className="sidebar-search-icon" />
                <input
                  type="text"
                  placeholder="Search"
                  className="sidebar-input"
                />
              </div>
              <div className="sidebar-items">
                <div className="sidebar-item">
                  <img
                    src={SellerImg}
                    alt="accessory"
                    className="sidebar-img"
                  />
                  <h5>Background 1</h5>
                </div>
                <div className="sidebar-item">
                  <img
                    src={SellerImg}
                    alt="accessory"
                    className="sidebar-img"
                  />
                  <h5>Background 2</h5>
                </div>
                <div className="sidebar-item">
                  <img
                    src={SellerImg}
                    alt="accessory"
                    className="sidebar-img"
                  />
                  <h5>Background 3</h5>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Custom Section */}
      <section>
        <div className="sidebar-wrapper">
          <div className="sidebar-title-wrapper">
            <h4>Custom</h4>
            {toggleCustom ? (
              <div onClick={() => setToggleCustom(false)}>
                <AiOutlineArrowUp className="sidebar-arrow-up-icon" />
              </div>
            ) : (
              <div onClick={() => setToggleCustom(true)}>
                <AiOutlineArrowDown className="sidebar-arrow-down-icon" />
              </div>
            )}
          </div>
          {toggleCustom && (
            <>
              <div className="sidebar-input-wrapper">
                <BiSearch className="sidebar-search-icon" />
                <input
                  type="text"
                  placeholder="Search"
                  className="sidebar-input"
                />
              </div>
              <div className="sidebar-items">
                <div className="sidebar-item">
                  <img
                    src={SellerImg}
                    alt="accessory"
                    className="sidebar-img"
                  />
                  <h5>Custom 1</h5>
                </div>
                <div className="sidebar-item">
                  <img
                    src={SellerImg}
                    alt="accessory"
                    className="sidebar-img"
                  />
                  <h5>Custom 2</h5>
                </div>
                <div className="sidebar-item">
                  <img
                    src={SellerImg}
                    alt="accessory"
                    className="sidebar-img"
                  />
                  <h5>Custom 3</h5>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Eyes Section */}
      <section>
        <div className="sidebar-wrapper">
          <div className="sidebar-title-wrapper">
            <h4>Eyes</h4>
            {toggleEyes ? (
              <div onClick={() => setToggleEyes(false)}>
                <AiOutlineArrowUp className="sidebar-arrow-up-icon" />
              </div>
            ) : (
              <div onClick={() => setToggleEyes(true)}>
                <AiOutlineArrowDown className="sidebar-arrow-down-icon" />
              </div>
            )}
          </div>
          {toggleEyes && (
            <>
              <div className="sidebar-input-wrapper">
                <BiSearch className="sidebar-search-icon" />
                <input
                  type="text"
                  placeholder="Search"
                  className="sidebar-input"
                />
              </div>
              <div className="sidebar-items">
                <div className="sidebar-item">
                  <img
                    src={SellerImg}
                    alt="accessory"
                    className="sidebar-img"
                  />
                  <h5>Eye 1</h5>
                </div>
                <div className="sidebar-item">
                  <img
                    src={SellerImg}
                    alt="accessory"
                    className="sidebar-img"
                  />
                  <h5>Eyes 2</h5>
                </div>
                <div className="sidebar-item">
                  <img
                    src={SellerImg}
                    alt="accessory"
                    className="sidebar-img"
                  />
                  <h5>Eyes 3</h5>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Head Section */}
      <section>
        <div className="sidebar-wrapper">
          <div className="sidebar-title-wrapper">
            <h4>Head</h4>
            {toggleHead ? (
              <div onClick={() => setToggleHead(false)}>
                <AiOutlineArrowUp className="sidebar-arrow-up-icon" />
              </div>
            ) : (
              <div onClick={() => setToggleHead(true)}>
                <AiOutlineArrowDown className="sidebar-arrow-down-icon" />
              </div>
            )}
          </div>
          {toggleHead && (
            <>
              <div className="sidebar-input-wrapper">
                <BiSearch className="sidebar-search-icon" />
                <input
                  type="text"
                  placeholder="Search"
                  className="sidebar-input"
                />
              </div>
              <div className="sidebar-items">
                <div className="sidebar-item">
                  <img
                    src={SellerImg}
                    alt="accessory"
                    className="sidebar-img"
                  />
                  <h5>Head 1</h5>
                </div>
                <div className="sidebar-item">
                  <img
                    src={SellerImg}
                    alt="accessory"
                    className="sidebar-img"
                  />
                  <h5>Head 2</h5>
                </div>
                <div className="sidebar-item">
                  <img
                    src={SellerImg}
                    alt="accessory"
                    className="sidebar-img"
                  />
                  <h5>Head 3</h5>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
