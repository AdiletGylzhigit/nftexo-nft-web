type Props = {
  order: String;
  sellerImg: String;
  username: String;
  price: String;
};

const CollectionItem = ({ order, sellerImg, username, price }: Props) => {
  return (
    // ci - collection-item
    <div className="ci-container">
      <p className="ci-order-num">{order}</p>
      <div className="ci-seller-info-wrapper">
        <img src={`${sellerImg}`} alt="seller-avatar" className="ci-seller-img" />
        <div className="ci-username-price-wrapper">
          <p className="ci-username">{username}</p>
          <p className="ci-price">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;
