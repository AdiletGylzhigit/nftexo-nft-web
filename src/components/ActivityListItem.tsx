import "../styles/stats-activity.css";
import { RiPriceTag3Line } from "react-icons/ri";
import { FaEthereum } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {
  punkImg: String;
  punkName: String;
  price: String;
  quantity: String;
  from: String;
  to: String;
  time: String;
};

const ActivityListItem = ({
  punkImg,
  punkName,
  price,
  quantity,
  from,
  to,
  time,
}: Props) => {
  return (
    // ali - activity-list-item
    <tr className="ali-container">
      <td>
        <div className="ali-punk-title-wrapper">
          <RiPriceTag3Line />
          <span>CryptoPunks</span>
        </div>
      </td>
      <td>
        <Link to="/explore/wd1231d">
          <div className="ali-item">
            <img src={`${punkImg}`} alt="punk-img" className="ali-punk-img" />
            <p>{punkName}</p>
          </div>
        </Link>
      </td>
      <td>
        <div className="ali-price">
          <FaEthereum />
          <span>{price}</span>
        </div>
      </td>
      <td>
        <p className="ali-quantity">{quantity}</p>
      </td>
      <td>
        <p className="ali-from">{from}</p>
      </td>
      <td>
        <p className="ali-to">{to}</p>
      </td>
      <td>
        <p className="ali-time">{time}</p>
      </td>
    </tr>
  );
};

export default ActivityListItem;
