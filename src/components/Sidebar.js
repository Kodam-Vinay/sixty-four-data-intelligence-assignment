import "../css/Sidebar.css";
import { LOGO_IMAGE_URL } from "../constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EachNavigation from "./EachNavigation";
import ApartMentLogo from "../svgs/ApartMentLogo";
import {
  faDisplay,
  faMagnifyingGlass,
  faCircleQuestion,
  faCalendar,
  faHeadphones,
  faBars,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import DollarLogo from "../svgs/DollarLogo";
import { useState } from "react";

const navigationList = [
  {
    id: "search",
    navigation: "/search",
    element: (
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="navigation-icon-color navigation-element-height-width"
      />
    ),
  },
  {
    id: "desktop",
    navigation: "/desktop",
    element: (
      <FontAwesomeIcon
        icon={faDisplay}
        className="navigation-icon-color navigation-element-height-width"
      />
    ),
  },
  {
    id: "help",
    navigation: "/help",
    element: (
      <FontAwesomeIcon
        icon={faCircleQuestion}
        className="navigation-icon-color navigation-element-height-width"
      />
    ),
  },
  {
    id: "calendar",
    navigation: "/calendar",
    element: (
      <FontAwesomeIcon
        icon={faCalendar}
        flip="horizontal"
        size="lg"
        className="navigation-icon-color navigation-element-height-width"
      />
    ),
  },
  {
    id: "store",
    navigation: "/store",
    element: <ApartMentLogo className="navigation-element-height-width" />,
  },
  {
    id: "dollar",
    navigation: "/dollar",
    element: <DollarLogo className="navigation-element-height-width" />,
  },
  {
    id: "headphones",
    navigation: "/headphones",
    element: (
      <FontAwesomeIcon
        icon={faHeadphones}
        className="navigation-icon-color navigation-element-height-width"
      />
    ),
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar-container ${!isOpen ? "remove-border" : ""}`}>
      <div
        className={`logo-hamburger-container ${
          !isOpen ? "add-absolute-position" : ""
        }`}
      >
        <img src={LOGO_IMAGE_URL} alt="logo" className="logo-image" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="button sidebar-button"
        >
          <FontAwesomeIcon
            icon={faBars}
            className="each-navigation-element navigation-icon-color hamburger-button"
          />
        </button>
      </div>
      <div
        className={`navigation-links-and-settings ${isOpen ? "open" : "close"}`}
      >
        <div className="navigation-list-container">
          {navigationList.map((each) => (
            <EachNavigation key={each?.id} navigationDetails={each} />
          ))}
        </div>
      </div>
      <button className="button sidebar-button">
        <FontAwesomeIcon
          icon={faGear}
          className="each-navigation-element navigation-icon-color"
          size="lg"
        />
      </button>
    </div>
  );
};

export default Sidebar;
