import "../styles/home.css";
import { AiFillStar } from "react-icons/ai";
import Quote from '../assets/icons/quote.png';

type Props = {
  commentText: String;
  userImg: String;
  username: String;
  designation: String;
};

const CommentItem = ({ commentText, userImg, username, designation }: Props) => {
  return (
    // cmi - comment-item
    <div className="cmi-container">
      <div className="cmi-quote-stars-wrapper">
        <img src={Quote} alt="quote" className="cmi-quote-img" />
        <div className="cmi-stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </div>
      <p className="cmi-text">{commentText}</p>
      <div className="cmi-user-info-wrapper">
        <img src={`${userImg}`} alt="user-avatar" className="cmi-user-img" />
        <div className="cmi-username-wrapper">
          <h4 className="cmi-username">{username}</h4>
          <p className="cmi-user-designation">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
