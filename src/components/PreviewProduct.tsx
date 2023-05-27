import "../styles/home.css";

type Props = {
  previewImg: String;
  userImg: String;
  username: String;
  price: String;
};

const PreviewProduct = ({ previewImg, userImg, username, price }: Props) => {
  return (
    // pp - preview-product
    <div className="pp-container">
      <div>
        <img
          src={`${previewImg}`}
          alt="product-preview"
          className="pp-punk-img"
        />
      </div>
      <div className="pp-user-info">
        <img src={`${userImg}`} alt="user-avatar" className="pp-user-img" />
        <div className="pp-username-price">
          <p className="pp-username">{username}</p>
          <p className="pp-price">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewProduct;
