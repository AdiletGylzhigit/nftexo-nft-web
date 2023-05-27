import { MdKeyboardArrowDown } from "react-icons/md";
import "../../styles/profile-settings.css";
import { useState } from "react";

type Props = {};

const SupportCategory = ({}: Props) => {
  const [generalHelp, setGeneralHelp] = useState<boolean>(true);
  const [contactHelp, setContactHelp] = useState<boolean>(true);
  const [accountHelp, setAccountHelp] = useState<boolean>(true);
  return (
    // psas - profile-settings-account-support
    <div className="psas-container">
      <h1 className="psas-title">Account Support</h1>
      <div className="psas-options">
        <div className="psas-option">
          <div className="psas-option-title-wrapper">
            <h4>General help</h4>
            <div onClick={() => setGeneralHelp(!generalHelp)}>
              <MdKeyboardArrowDown className="psas-icon" />
            </div>
          </div>
          {generalHelp ? (
            <p className="psas-option-text">
              Visit our help center to learn how to get started with buying,
              selling, and creating.
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="psas-option">
          <div className="psas-option-title-wrapper">
            <h4>Contact OpenSea Support</h4>
            <div onClick={() => setContactHelp(!contactHelp)}>
              <MdKeyboardArrowDown className="psas-icon" />
            </div>
          </div>
          {contactHelp ? (
            <p className="psas-option-text">
              Visit our help center to learn how to get started with buying,
              selling, and creating.
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="psas-option">
          <div className="psas-option-title-wrapper">
            <h4>Help with a compromised account</h4>
            <div onClick={() => setAccountHelp(!accountHelp)}>
              <MdKeyboardArrowDown className="psas-icon" />
            </div>
          </div>
          {accountHelp ? (
            <p className="psas-option-text">
              Visit our help center to learn how to get started with buying,
              selling, and creating.
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default SupportCategory;
