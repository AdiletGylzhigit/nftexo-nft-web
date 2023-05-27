import "../../styles/profile-settings.css";
import User from "../../assets/images/user-avatar.jpg";
import Banner from "../../assets/images/collectible.jpg";

type Props = {};

const ProfileCategory = ({}: Props) => {
  return (
    <div className="ps-setting-container">
      <div className="ps-title-wrapper">
        <h1>Profile Settings</h1>
        <button>Preview</button>
      </div>
      <div className="ps-forms">
        <div className="ps-inputs">
          <div className="ps-input">
            <label htmlFor="first_name">First Name</label>
            <input id="first_name" type="text" placeholder="First name" />
          </div>
          <div className="ps-input">
            <label htmlFor="last_name">Last Name</label>
            <input id="last_name" type="text" placeholder="Last name" />
          </div>
          <div className="ps-input">
            <label htmlFor="username">Enter Name</label>
            <input id="username" type="text" placeholder="Enter username" />
          </div>
          <div className="ps-input">
            <label htmlFor="wallet">Wallet address</label>
            <input
              id="wallet"
              type="text"
              placeholder="0x72e6663e20504b6153d4c5"
            />
          </div>
        </div>
        <div className="ps-uploads">
          <h4 className="ps-upload-title">Profile Image</h4>
          <div className="ps-upload-img-wrapper">
            <img src={User} alt="user-avatar" className="ps-user-img" />
            <input
              id="ps-user-img-upload"
              type="file"
              className="ps-user-input-upload"
            />
            <label
              htmlFor="ps-user-img-upload"
              className="ps-user-upload-label"
            >
              Upload New Picture
            </label>
            <button className="ps-user-img-delete">Delete</button>
          </div>
          <h4 className="ps-banner-title">Banner Image</h4>
          <div className="ps-upload-banner">
            <img src={Banner} alt="banner" className="ps-banner-img" />
            <input type="file" id='ps-upload-banner-img' className='ps-banner-input-upload'/>
            <label htmlFor="ps-upload-img-banner" className="ps-banner-upload-label">Upload New Picture</label>
            <button className="ps-delete-img-banner">Delete</button>
          </div>
        </div>
      </div>
      <button className="ps-btn-save">Save</button>
    </div>
  );
};

export default ProfileCategory;
