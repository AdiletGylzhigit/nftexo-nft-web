import RankListItem from "../components/RankListItem";
import "../styles/stats-rank.css";
import Art from "../assets/images/art.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {};

const StatsRankScreen = ({}: Props) => {
  return (
    // sr - stats-rank
    <div className="sr-container">
      <Header />
      <main>
        <h1 className="sr-title">Top NFTs</h1>
        <div className="sr-selects">
          <p className="sr-text">
            The top NFTs on OpenSea, ranked by volume, floor price and other
            statistics.
          </p>
          <select className="sr-select">
            <option>Last 1 day</option>
            <option>Last 7 days</option>
            <option>Last 1 month</option>
            <option>Last 6 months</option>
            <option>Last 1 year</option>
          </select>
          <select className="sr-select">
            <option>All categories</option>
          </select>
          <select className="sr-select">
            <option>All chains</option>
          </select>
        </div>
        <div className="table-wrapper">
          <table className="table-rank">
            {/* Table Head */}
            <tr className="tr-head">
              <th></th>
              <th><p>Collection</p></th>
              <th><p>Volume</p></th>
              <th><p>24h %</p></th>
              <th><p>7d %</p></th>
              <th><p>Floor Price</p></th>
              <th><p>Owners</p></th>
              <th><p>Assets</p></th>
            </tr>
            {/* Table Body */}
            <RankListItem
              order="1"
              punkImg={Art}
              punkName="Crypto Punks"
              volume="133,871.43"
              within24h="-48.31%"
              within7d="+1396.90%"
              floorPrice="133"
              owners="3.2k"
              assets="10.0k"
            />
            <RankListItem
              order="1"
              punkImg={Art}
              punkName="Crypto Punks"
              volume="133,871.43"
              within24h="-48.31%"
              within7d="+1396.90%"
              floorPrice="133"
              owners="3.2k"
              assets="10.0k"
            />
            <RankListItem
              order="1"
              punkImg={Art}
              punkName="Crypto Punks"
              volume="133,871.43"
              within24h="-48.31%"
              within7d="+1396.90%"
              floorPrice="133"
              owners="3.2k"
              assets="10.0k"
            />
            <RankListItem
              order="1"
              punkImg={Art}
              punkName="Crypto Punks"
              volume="133,871.43"
              within24h="-48.31%"
              within7d="+1396.90%"
              floorPrice="133"
              owners="3.2k"
              assets="10.0k"
            />
            <RankListItem
              order="1"
              punkImg={Art}
              punkName="Crypto Punks"
              volume="133,871.43"
              within24h="-48.31%"
              within7d="+1396.90%"
              floorPrice="133"
              owners="3.2k"
              assets="10.0k"
            />
            <RankListItem
              order="1"
              punkImg={Art}
              punkName="Crypto Punks"
              volume="133,871.43"
              within24h="-48.31%"
              within7d="+1396.90%"
              floorPrice="133"
              owners="3.2k"
              assets="10.0k"
            />
            <RankListItem
              order="1"
              punkImg={Art}
              punkName="Crypto Punks"
              volume="133,871.43"
              within24h="-48.31%"
              within7d="+1396.90%"
              floorPrice="133"
              owners="3.2k"
              assets="10.0k"
            />
            <RankListItem
              order="1"
              punkImg={Art}
              punkName="Crypto Punks"
              volume="133,871.43"
              within24h="-48.31%"
              within7d="+1396.90%"
              floorPrice="133"
              owners="3.2k"
              assets="10.0k"
            />
            <RankListItem
              order="1"
              punkImg={Art}
              punkName="Crypto Punks"
              volume="133,871.43"
              within24h="-48.31%"
              within7d="+1396.90%"
              floorPrice="133"
              owners="3.2k"
              assets="10.0k"
            />
            <RankListItem
              order="1"
              punkImg={Art}
              punkName="Crypto Punks"
              volume="133,871.43"
              within24h="-48.31%"
              within7d="+1396.90%"
              floorPrice="133"
              owners="3.2k"
              assets="10.0k"
            />
            <RankListItem
              order="1"
              punkImg={Art}
              punkName="Crypto Punks"
              volume="133,871.43"
              within24h="-48.31%"
              within7d="+1396.90%"
              floorPrice="133"
              owners="3.2k"
              assets="10.0k"
            />
            <RankListItem
              order="1"
              punkImg={Art}
              punkName="Crypto Punks"
              volume="133,871.43"
              within24h="-48.31%"
              within7d="+1396.90%"
              floorPrice="133"
              owners="3.2k"
              assets="10.0k"
            />
            <RankListItem
              order="1"
              punkImg={Art}
              punkName="Crypto Punks"
              volume="133,871.43"
              within24h="-48.31%"
              within7d="+1396.90%"
              floorPrice="133"
              owners="3.2k"
              assets="10.0k"
            />
            <RankListItem
              order="1"
              punkImg={Art}
              punkName="Crypto Punks"
              volume="133,871.43"
              within24h="-48.31%"
              within7d="+1396.90%"
              floorPrice="133"
              owners="3.2k"
              assets="10.0k"
            />
            <RankListItem
              order="1"
              punkImg={Art}
              punkName="Crypto Punks"
              volume="133,871.43"
              within24h="-48.31%"
              within7d="+1396.90%"
              floorPrice="133"
              owners="3.2k"
              assets="10.0k"
            />
            <RankListItem
              order="1"
              punkImg={Art}
              punkName="Crypto Punks"
              volume="133,871.43"
              within24h="-48.31%"
              within7d="+1396.90%"
              floorPrice="133"
              owners="3.2k"
              assets="10.0k"
            />
            <RankListItem
              order="1"
              punkImg={Art}
              punkName="Crypto Punks"
              volume="133,871.43"
              within24h="-48.31%"
              within7d="+1396.90%"
              floorPrice="133"
              owners="3.2k"
              assets="10.0k"
            />
            <RankListItem
              order="1"
              punkImg={Art}
              punkName="Crypto Punks"
              volume="133,871.43"
              within24h="-48.31%"
              within7d="+1396.90%"
              floorPrice="133"
              owners="3.2k"
              assets="10.0k"
            />
            <RankListItem
              order="1"
              punkImg={Art}
              punkName="Crypto Punks"
              volume="133,871.43"
              within24h="-48.31%"
              within7d="+1396.90%"
              floorPrice="133"
              owners="3.2k"
              assets="10.0k"
            />
            <RankListItem
              order="1"
              punkImg={Art}
              punkName="Crypto Punks"
              volume="133,871.43"
              within24h="-48.31%"
              within7d="+1396.90%"
              floorPrice="133"
              owners="3.2k"
              assets="10.0k"
            />
          </table>
        </div>
        <div className="sr-pagination">
          <div className="sr-pagination-previous">
            <AiOutlineArrowLeft />
            <span>01-50</span>
          </div>
          <div className="sr-pagination-next">
            <span>51-201</span>
            <AiOutlineArrowRight />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StatsRankScreen;
