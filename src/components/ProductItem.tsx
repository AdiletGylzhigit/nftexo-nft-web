import '../styles/home.css';
import { AiFillHeart } from 'react-icons/ai';

type Props = {
  productImg: String;
  userImg: String;
  username: String;
  daysLeft: String;
  hoursLeft: String;
  productName: String;
  price: String;
  likes: String;
}

const ProductItem = ({ productImg, userImg, username, daysLeft, hoursLeft, productName, price, likes }: Props) => {
  return (
    // pi - product-item
    <div className='pi-container'>
      <div className='pi-img-wrapper'>
        <img src={`${productImg}`} alt="product" className='pi-product-img' />
        <span className='pi-art-text'>Art</span>
      </div>
      <div className='pi-user-wrapper'>
        <div className='pi-user-info'>
          <img src={`${userImg}`} alt="user-avatar" className='pi-user-img' />
          <p className='pi-username'>{username}</p>
          <p className='pi-days-left'>{daysLeft} Days {hoursLeft}hrs <span className='pi-left-text'>Left</span></p>
        </div>
        <h3 className='pi-p-name'>{productName}</h3>
        <div className='pi-bid-wrapper'>
          <p className='pi-bid-text'>Highest bid</p>
          <div className='pi-price-likes-wrapper'>
            <p className='pi-price'>{price} ETH</p>
            <div className='pi-likes-wrapper'>
              <AiFillHeart className='pi-like-icon' />
              <p>{likes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem