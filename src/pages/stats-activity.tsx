import ActivityListItem from "../components/ActivityListItem";
import Sidebar from "../components/Sidebar";
import "../styles/stats-activity.css";
import Art from "../assets/images/art.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {};

const StatsActivityScreen = ({}: Props) => {
  return (
    // sa - stats-activity
    <div className="sa-container">
      <Header />
      <main>
        <div className="sa-col-1">
          <Sidebar />
        </div>
        <div className="sa-col-2">
          <div className="sa-table">
            <table>
              {/* Header Table */}
              <tr>
                <th></th>
                <th>
                  <p>Item</p>
                </th>
                <th>
                  <p>Price</p>
                </th>
                <th>
                  <p>Quantity</p>
                </th>
                <th>
                  <p>From</p>
                </th>
                <th>
                  <p>To</p>
                </th>
                <th>
                  <p>Time</p>
                </th>
              </tr>
              {/* Body Table */}
              <ActivityListItem
                punkImg={Art}
                punkName="Top Dog #1234"
                price="133.87"
                quantity="01"
                from="39690"
                to="....."
                time="12s ago"
              />

              <ActivityListItem
                punkImg={Art}
                punkName="Top Dog #1234"
                price="133.87"
                quantity="01"
                from="39690"
                to="....."
                time="12s ago"
              />
              <ActivityListItem
                punkImg={Art}
                punkName="Top Dog #1234"
                price="133.87"
                quantity="01"
                from="39690"
                to="....."
                time="12s ago"
              />
              <ActivityListItem
                punkImg={Art}
                punkName="Top Dog #1234"
                price="133.87"
                quantity="01"
                from="39690"
                to="....."
                time="12s ago"
              />
              <ActivityListItem
                punkImg={Art}
                punkName="Top Dog #1234"
                price="133.87"
                quantity="01"
                from="39690"
                to="....."
                time="12s ago"
              />
              <ActivityListItem
                punkImg={Art}
                punkName="Top Dog #1234"
                price="133.87"
                quantity="01"
                from="39690"
                to="....."
                time="12s ago"
              />
              <ActivityListItem
                punkImg={Art}
                punkName="Top Dog #1234"
                price="133.87"
                quantity="01"
                from="39690"
                to="....."
                time="12s ago"
              />
              <ActivityListItem
                punkImg={Art}
                punkName="Top Dog #1234"
                price="133.87"
                quantity="01"
                from="39690"
                to="....."
                time="12s ago"
              />
              <ActivityListItem
                punkImg={Art}
                punkName="Top Dog #1234"
                price="133.87"
                quantity="01"
                from="39690"
                to="....."
                time="12s ago"
              />
              <ActivityListItem
                punkImg={Art}
                punkName="Top Dog #1234"
                price="133.87"
                quantity="01"
                from="39690"
                to="....."
                time="12s ago"
              />
              <ActivityListItem
                punkImg={Art}
                punkName="Top Dog #1234"
                price="133.87"
                quantity="01"
                from="39690"
                to="....."
                time="12s ago"
              />
              <ActivityListItem
                punkImg={Art}
                punkName="Top Dog #1234"
                price="133.87"
                quantity="01"
                from="39690"
                to="....."
                time="12s ago"
              />
              <ActivityListItem
                punkImg={Art}
                punkName="Top Dog #1234"
                price="133.87"
                quantity="01"
                from="39690"
                to="....."
                time="12s ago"
              />
              <ActivityListItem
                punkImg={Art}
                punkName="Top Dog #1234"
                price="133.87"
                quantity="01"
                from="39690"
                to="....."
                time="12s ago"
              />
              <ActivityListItem
                punkImg={Art}
                punkName="Top Dog #1234"
                price="133.87"
                quantity="01"
                from="39690"
                to="....."
                time="12s ago"
              />
              <ActivityListItem
                punkImg={Art}
                punkName="Top Dog #1234"
                price="133.87"
                quantity="01"
                from="39690"
                to="....."
                time="12s ago"
              />
              <ActivityListItem
                punkImg={Art}
                punkName="Top Dog #1234"
                price="133.87"
                quantity="01"
                from="39690"
                to="....."
                time="12s ago"
              />
              <ActivityListItem
                punkImg={Art}
                punkName="Top Dog #1234"
                price="133.87"
                quantity="01"
                from="39690"
                to="....."
                time="12s ago"
              />
              <ActivityListItem
                punkImg={Art}
                punkName="Top Dog #1234"
                price="133.87"
                quantity="01"
                from="39690"
                to="....."
                time="12s ago"
              />
              <ActivityListItem
                punkImg={Art}
                punkName="Top Dog #1234"
                price="133.87"
                quantity="01"
                from="39690"
                to="....."
                time="12s ago"
              />
            </table>
          </div>
          <div className="sa-pagination">
            <div className="sa-pagination-previous">
              <AiOutlineArrowLeft />
              <span>01-50</span>
            </div>
            <div className="sa-pagination-next">
              <span>51-201</span>
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StatsActivityScreen;
