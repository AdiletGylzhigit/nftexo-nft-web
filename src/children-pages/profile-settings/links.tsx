import "../../styles/profile-settings.css";

type Props = {};

const LinksCategory = ({}: Props) => {
  return (
    <div className="psl-container">
      <h1 className="ps-title">Social Links</h1>
      <div className="psl-inputs">
        <div className="psl-inputs-row-1">
          <div className="psl-input-wrapper">
            <label htmlFor="facebook">Facebook</label>
            <input id="facebook" type="text" />
          </div>
          <div className="psl-input-wrapper">
            <label htmlFor="twitter">Twitter</label>
            <input id="twitter" type="text" />
          </div>
          <div className="psl-input-wrapper">
            <label htmlFor="pinterest">Pinterest</label>
            <input id="pinterest" type="text" />
          </div>
        </div>
        <div className="psl-inputs-row-2">
          <div className="psl-input-wrapper">
            <label htmlFor="linkedin">Linkdein</label>
            <input id="linkedin" type="text" />
          </div>
          <div className="psl-input-wrapper">
            <label htmlFor="behance">Behance</label>
            <input id="behance" type="text" />
          </div>
          <div className="psl-input-wrapper">
            <label htmlFor="dribble">Dribbble</label>
            <input id="dribble" type="text" />
          </div>
        </div>
        <button className="psl-btn">Update Social Profiles</button>
      </div>
    </div>
  );
};

export default LinksCategory;
