import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/create-item.css";
import Img from "../assets/icons/icons8-img-100.png";
import { FiDollarSign, FiUnlock } from "react-icons/fi";
import {
  AiFillStar,
  AiOutlineQuestionCircle,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { CgMenuLeft } from "react-icons/cg";

type Props = {};

const CreateItemScreen = ({}: Props) => {
  return (
    // cip - create-item-product
    <div className="cip-container">
      <Header />
      <main>
        <div className="cip-even-columns">
          <div className="cip-column-1">
            <h1 className="cip-title">Create single item</h1>
            <p className="cip-text">
              Image, Video, Audio, or 3D Model. File types supported: JPG, PNG,
              GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
            </p>
            <p className="cip-upload-title">Upload File</p>
            <label htmlFor="cip-upload" className="cip-upload-label">
              <img
                src={Img}
                alt="img-illustration"
                className="cip-upload-img"
              />
            </label>
            <input type="file" id="cip-upload" className="cip-upload-input" />
            <div className="cip-input-wrapper">
              <label htmlFor="cip-name">Name</label>
              <input type="text" id="cip-name" />
            </div>
            <div className="cip-input-wrapper">
              <label htmlFor="cip-link">External Link</label>
              <input type="text" id="cip-link" />
            </div>
            <div className="cip-input-wrapper">
              <label htmlFor="cip-description">Description</label>
              <textarea id="cip-description" />
            </div>
            <p className="cip-blockchain-text">Blockchain</p>
            <select className="cip-select">
              <option>Ethereum</option>
            </select>
            <div className="cip-section-1">
              <div className="cip-section-1-wrapper">
                <div>
                  <FiDollarSign />
                  <p>Fixed Price</p>
                </div>
                <div>
                  <AiOutlineUnorderedList />
                  <p>Timed Auction</p>
                </div>
                <div>
                  <AiOutlineUnorderedList />
                  <p>Open For Bids</p>
                </div>
              </div>
              <div className="cip-input-wrapper">
                <h4 className="cip-price-text">Price</h4>
                <input type="text" />
              </div>
            </div>
            <h4 className="cip-collection-text">Collection</h4>
            <select className="cip-collection-select">
              <option>Select Collection</option>
            </select>
            <div className="cip-section-2">
              <div className="cip-category-wrapper">
                <AiOutlineUnorderedList />
                <p>Properties</p>
              </div>
              <div className="cip-category-wrapper">
                <AiFillStar />
                <p>Levels</p>
              </div>
              <div className="cip-category-wrapper">
                <CgMenuLeft />
                <p>Stats</p>
              </div>
              <div className="cip-unlock-wrapper">
                <div>
                  <FiUnlock />
                  <p>Unlockable Content</p>
                </div>
                <input type="checkbox" />
              </div>
              <div className="cip-explicit-wrapper">
                <div>
                  <AiOutlineQuestionCircle />
                  <p>Explicit & Sensitive Content</p>
                </div>
                <input type="checkbox" />
              </div>
            </div>
            <button className="cip-btn-create">Create</button>
          </div>
          <div className="cip-column-2">
            <p className="cip-title-2">Preview</p>
            <div className="cip-img-info-wrapper">
              <div className="cip-preview-img-wrapper">
                <img src="" alt="" className="cip-preview-img" />
              </div>
              <div className="cip-info-wrapper">
                <span className="cip-info-price">20 ETH</span>
                <span className="cip-info-edition">0 editions</span>
                <button className="cip-btn-place-bid">Place a bid</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateItemScreen;
