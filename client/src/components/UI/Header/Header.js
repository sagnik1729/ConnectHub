import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faExclamationCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://images.ctfassets.net/lzny33ho1g45/aautbTN2aVwYl2LGd1ecu/250fef0ec75faa1b48d896dfced07cc9/Zoom_hero.jpg?w=1520&fm=jpg&q=30&fit=thumb&h=760" />
        <span className="help-text">Geoference</span>
      </div>
      <div className="action-btn">
        <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} />
        <FontAwesomeIcon className="icon-block" icon={faExclamationCircle} />
        <FontAwesomeIcon className="icon-block" icon={faCog} />
      </div>
    </div>
  );
};
export default Header;
