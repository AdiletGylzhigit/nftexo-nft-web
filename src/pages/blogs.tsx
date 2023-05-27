import { Outlet, NavLink } from "react-router-dom";
import "../styles/blogs.css";
import "../styles/blogs.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {};

const BlogsScreen = ({}: Props) => {
  return (
    <div className="blogs-container">
      <Header />
      <main>
        <h1 className="blog-title">NFT Blogs</h1>
        <div className="blog-categories">
          <p className="blogs-text">
            The top NFTs on OpenSea, ranked by volume, floor price and other
            statistics.
          </p>
          <ul className="blogs-list">
            <li>
              <p>
                <NavLink
                  to={`guides`}
                  className={({ isActive, isPending }) =>
                    isActive ? "active-blog" : isPending ? "pending" : ""
                  }
                >
                  Guides
                </NavLink>
              </p>
            </li>
            <li>
              <p>
                <NavLink
                  to={`guest-posts`}
                  className={({ isActive, isPending }) =>
                    isActive ? "active-blog" : isPending ? "pending" : ""
                  }
                >
                  Guest Posts
                </NavLink>
              </p>
            </li>
            <li>
              <p>
                <NavLink
                  to={`spotlights`}
                  className={({ isActive, isPending }) =>
                    isActive ? "active-blog" : isPending ? "pending" : ""
                  }
                >
                  Spotlights
                </NavLink>
              </p>
            </li>
            <li>
              <p>
                <NavLink
                  to={`safety-security`}
                  className={({ isActive, isPending }) =>
                    isActive ? "active-blog" : isPending ? "pending" : ""
                  }
                >
                  Safety & Security
                </NavLink>
              </p>
            </li>
            <li>
              <p>
                <NavLink
                  to={`announcements`}
                  className={({ isActive, isPending }) =>
                    isActive ? "active-blog" : isPending ? "pending" : ""
                  }
                >
                  Announcements
                </NavLink>
              </p>
            </li>
          </ul>
        </div>
        <div id="blogs" className="blogs-items">
          <Outlet />
        </div>
        <div className="blogs-pagination">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <div className="blogs-pagination-next">
            <button className="blogs-pagination-btn">Next</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogsScreen;
