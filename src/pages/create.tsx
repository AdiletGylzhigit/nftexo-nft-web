import "../styles/create.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

type Props = {};

const CreateScreen = ({}: Props) => {
  return (
    // cp - create product
    <div className="cp-container">
      <Header />
      <main>
        <div className="cp-wrapper">
          <Link to="/">
            <div className="cp-back-btn-wrapper">
              <FiArrowLeft />
              <button className="cp-back-btn">Go Back</button>
            </div>
          </Link>
          <h1 className="cp-title">Create new item</h1>
          <p className="cp-text-1">
            Image, Video, Audio, or 3D Model. File types supported: JPG, PNG,
            GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
          </p>
          <div className="cp-create-wrapper">
            <button className="cp-create-btn">Create new item</button>
          </div>
          <p className="cp-text-2">
            We do not own your private keys and cannot access your funds without
            your confirmation
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateScreen;
