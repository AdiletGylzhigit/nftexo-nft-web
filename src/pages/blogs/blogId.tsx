import "../../styles/blog.css";
import Blog from "../../assets/images/illustration.jpg";
import BlogItem from "../../components/BlogItem";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type Props = {};

const BlogIdScreen = ({}: Props) => {
  return (
    <div className="blog-container">
      <Header />
      <main>
        <div className="blog-bg">
          <img src={Blog} alt="blog" className="blog-img" />
        </div>
        <section className="blog-section">
          <h1 className="blog-title">Alethea introduces The Revenants iNFTs</h1>
          <div className="blog-date-wrapper">
            <p className="blog-date">October 14, 2021</p>
            <p className="blog-by">By Hamish Barnes</p>
          </div>
          <p className="blog-text-1">
            The Revenants is a first-of-its-kind collection, depicting
            historical and cultural icons reborn. From Nikola Tesla to Napoleon
            to Cleopatra, the world’s greatest minds and stories are now being
            brought to life as Intelligent NFTs. iNFTs are a powerful new medium
            that not only seeks to advance the utilities of NFTs but also unlock
            new economic, creative, and social possibilities. The First iNFT was
            auctioned successfully through Sotheby’s on June 10th, 2021 for
            nearly half a million USD. You can find the Revenants by visiting
            alethea.ai and entering the Intelligent Metaverse known as Noah’s
            Ark. You can broadcast a custom video message that the iNFT, Robin
            Hood recites, or ask Snow White what the meaning of love is. On
            Noah’s Ark, all iNFTs have varying levels of intelligence that allow
            them to interact.
          </p>
          <img src={Blog} alt="blog" className="blog-img-2" />
          <p className="blog-text-2">
            Step 1: Choose a format Pitch is your chance to show clients the
            designer behind the work. Here are a few different formats you can
            choose from to achieve this: Present yourself — Film a short
            introductory video sharing your work history, experience, education,
            and more. Create a sizzle reel — Showcase your work through a video
            montage to highlight the depth and breadth of your skills. Share
            your creative process — Talk future clients through how you approach
            the design process and what it looks like to work with you. While
            these are the most obvious formats for your Pitch, we encourage you
            to get creative with it! Let your imagination run wild and tell your
            story, your way.
          </p>
          <div className="blog-pagination">
            <div className="blog-pagination-prev">
              <span className="blog-prev-action">{`<<`} Previous Post</span>
              <p className="blog-prev-blog">
                Alethea introduces The Reve nants iNFTs
              </p>
            </div>
            <div className="blog-pagination-next">
              <span className="blog-next-action">Next Post {`>>`}</span>
              <p className="blog-next-blog">
                Alethea introduces The Reve nants iNFTs
              </p>
            </div>
          </div>
          <div className="blog-similar">
            <h1 className="blog-similar-title">Other similar posts</h1>
            <div className="blog-similar-items">
              <BlogItem
                blogImg={Blog}
                titleCategory="Blog"
                date="October 15, 2021"
                blogTitle="The Rusty Robots"
                blogText="Intriguing new NFTs from the likes of Joey
            Khamis, OG:Crystals, Alethea, Yonat Vaks,
            NFT-V Miami, and Roe Ethridge."
              />
              <BlogItem
                blogImg={Blog}
                titleCategory="Blog"
                date="October 15, 2021"
                blogTitle="The Rusty Robots"
                blogText="Intriguing new NFTs from the likes of Joey
            Khamis, OG:Crystals, Alethea, Yonat Vaks,
            NFT-V Miami, and Roe Ethridge."
              />
              <BlogItem
                blogImg={Blog}
                titleCategory="Blog"
                date="October 15, 2021"
                blogTitle="The Rusty Robots"
                blogText="Intriguing new NFTs from the likes of Joey
            Khamis, OG:Crystals, Alethea, Yonat Vaks,
            NFT-V Miami, and Roe Ethridge."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogIdScreen;
