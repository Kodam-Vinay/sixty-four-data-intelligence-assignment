import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/Header.css";
import { faBell, faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
import { getDate, getTime } from "../constants/constants";
import { useEffect, useState } from "react";

const Header = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const presentTime = getTime(date);
      setTime(presentTime);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time]);
  return (
    <div className="header-container">
      <div className="header-left-container">
        <h3>Good Afternoon, Akshay</h3>
        <p className="header-paragraph-text">
          You are subscribed to Retail plan.
        </p>
      </div>
      <div className="header-right-container">
        <div className="header-right-time-date-container">
          <FontAwesomeIcon
            icon={faCalendar}
            className="header-right-each-element"
          />
          <p className="header-right-each-element header-paragraph-text">
            <span>Today,</span>
            <span>{getDate()}</span>
          </p>
          <FontAwesomeIcon
            icon={faClock}
            className="header-right-each-element"
          />
          <p className="header-right-each-element header-paragraph-text">
            <span>{time}</span>
          </p>
        </div>
        <FontAwesomeIcon icon={faBell} size="xl" />
      </div>
    </div>
  );
};

export default Header;
