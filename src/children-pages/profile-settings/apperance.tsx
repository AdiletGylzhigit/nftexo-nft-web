import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import "../../styles/profile-settings.css";

type Props = {};

const ApperanceCategory = ({}: Props) => {
  return (
    // psa - profile-settings-appearance
    <div className="psa-container">
      <h1 className="psa-title">Appearance Settings</h1>
      <div className="psa-theme">
        <h4>Theme</h4>
        <div className="psa-btns">
          <button>
            <span>
              <BsFillSunFill />
            </span>
            <span>Ligh Mode</span>
          </button>
          <button>
            <span>
              <BsFillMoonFill />
            </span>
            <span>Dark Mode</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApperanceCategory;
