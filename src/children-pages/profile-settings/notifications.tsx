import "../../styles/profile-settings.css";

type Props = {};

const NotificationsCategory = ({}: Props) => {
  return (
    <div className="psn-container">
      <h1 className="psn-title">Notifications Settings</h1>
      <div className="psn-checkboxes">
        <div className="psn-checkbox-wrapper">
          <input type="checkbox" />
          <div className="psn-checkbox-texts">
            <p>Item Sold</p>
            <p>When someone purchased one of your items</p>
          </div>
        </div>
        <div className="psn-checkbox-wrapper">
          <input type="checkbox" />
          <div className="psn-checkbox-texts">
            <p>Bid Activity</p>
            <p>When someone purchased one of your items</p>
          </div>
        </div>
        <div className="psn-checkbox-wrapper">
          <input type="checkbox" />
          <div className="psn-checkbox-texts">
            <p>Price Change</p>
            <p>When someone purchased one of your items</p>
          </div>
        </div>
        <div className="psn-checkbox-wrapper">
          <input type="checkbox" />
          <div className="psn-checkbox-texts">
            <p>Auction Expiration</p>
            <p>When someone purchased one of your items</p>
          </div>
        </div>
        <div className="psn-checkbox-wrapper">
          <input type="checkbox" />
          <div className="psn-checkbox-texts">
            <p>Outbid</p>
            <p>When someone purchased one of your items</p>
          </div>
        </div>
        <div className="psn-checkbox-wrapper">
          <input type="checkbox" />
          <div className="psn-checkbox-texts">
            <p>Referral Successful</p>
            <p>When someone purchased one of your items</p>
          </div>
        </div>
      </div>
      <button className="psn-btn">Save</button>
    </div>
  );
};

export default NotificationsCategory;
