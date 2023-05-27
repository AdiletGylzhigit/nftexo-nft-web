import { IoCheckmarkCircleSharp } from "react-icons/io5";

type Props = {
  bidderImg: String;
  bidPrice: String;
  bidBy: String;
};

const ProductBidItem = ({ bidderImg, bidPrice, bidBy }: Props) => {
  return (
    <div className="product-bid">
      <div className="product-bid-img-wrapper">
        <img
          src={`${bidderImg}`}
          alt="user-avatar"
          className="product-bid-img"
        />
        <IoCheckmarkCircleSharp className='product-bid-checkmark-icon' />
      </div>
      <div className="product-bid-info">
        <p className="product-bid-price-title">{bidPrice}</p>
        <p className="product-bid-by-title">{bidBy}</p>
      </div>
    </div>
  );
};

export default ProductBidItem;
