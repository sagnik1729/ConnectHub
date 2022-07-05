import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import shortid from "shortid";
import "./HomePage.scss";
import Header from "../UI/Header/Header";

const HomePage = () => {
  const history = useHistory();

  const startCall = () => {
    const uid = shortid.generate();
    history.push(`/${uid}#init`);
  };

  return (
    <div className="home-page">
      <Header />
      <div className="body">
        <div className="left-side">
          <div className="content">
            <h2>Premium video meetings. Now free for everyone.</h2>
            <p>
              We re-engineered the service we built for secure business
              meetings, Geoference, to make it free and available for all.
            </p>
            <div className="action-btn">
              <button className="btn green" onClick={startCall}>
                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                New Meeting
              </button>
              <div className="input-block">
                <div className="input-section">
                  <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                  <input placeholder="Enter a code or link" />
                </div>
                <button className="btn no-bg">Join</button>
              </div>
            </div>
          </div>
          <div className="help-text">
            <a href="">Learn more</a> about Google Meet
          </div>
        </div>
        <div className="right-side">
          <div className="content">
            <img src="data:image/png;base64,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" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
