import "../styles/stats-rank.css";
import { FaEthereum } from "react-icons/fa";

type Props = {
  order: String;
  punkImg: String;
  punkName: String;
  volume: String;
  within24h: String;
  within7d: String;
  floorPrice: String;
  owners: String;
  assets: String;
};

const RankListItem = ({
  order,
  punkImg,
  punkName,
  volume,
  within24h,
  within7d,
  floorPrice,
  owners,
  assets,
}: Props) => {
  return (
    // ri - rank-item
    <tr className="tr-body">
      <td className="ri-order-num">{order}</td>
      <td>
        <div className="ri-punk-info">
          <img src={`${punkImg}`} alt="punk" className="ri-punk-img" />
          <span className="ri-punk-name">{punkName}</span>
        </div>
      </td>
      <td>
        <div className="ri-volume">
          <FaEthereum className="ri-eth-icon" />
          <span>{volume}</span>
        </div>
      </td>
      <td className="ri-24h">{within24h}</td>
      <td className="ri-7d">{within7d}</td>
      <td>
        <div className="ri-floor-price">
          <FaEthereum className="ri-eth-icon" />
          <span>{floorPrice}</span>
        </div>
      </td>
      <td className="ri-owners">{owners}</td>
      <td className="ri-assets">{assets}</td>
    </tr>
  );
};

export default RankListItem;
