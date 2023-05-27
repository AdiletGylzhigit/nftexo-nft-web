type Props = {
  blogImg: String;
  titleCategory: String; 
  date: String;
  blogTitle: String;
  blogText: String;
};

const BlogItem = ({ blogImg, titleCategory, date, blogTitle, blogText }: Props) => {
  return (
    // bi - blog-item
    <div className="bi-container">
      <img src={`${blogImg}`} alt="blog" className="bi-blog-img" />
      <div className="bi-info">
        <div className="bi-category-wrapper">
          <p className="bi-category-text">{titleCategory}</p>
          <p className="bi-date">{date}</p>
        </div>
        <h3 className="bi-title">{blogTitle}</h3>
        <p className="bi-text">{blogText}</p>
      </div>
    </div>
  );
};

export default BlogItem;
