import "../../styles/profile-settings.css";
import NoOffer from '../../assets/images/no-offers.png';

type Props = {};

const OffersCategory = ({}: Props) => {
  return (
    // pso - profile-settings-offers
    <div className="pso-container">
      <div className="pso-title-wrapper">
        <h1>Offer Settings</h1>
        <button>View My Offers</button>
      </div>
      <div className="pso-offers">
        <img src={NoOffer} alt="iilustration" className="pso-img" />
        <h3>No collections to manage offers</h3>
        <p>
          You currently don’t have any collections and items to manage offers.
        </p>
      </div>
    </div>
  );
};

export default OffersCategory;
