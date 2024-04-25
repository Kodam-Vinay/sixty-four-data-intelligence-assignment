import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/LibraryCards.css";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { applyColorClass } from "../constants/constants";

const LibraryCards = () => {
  return (
    <div className="library-card-container">
      {Array(5)
        .fill("")
        .map((each, index) => (
          <div key={index} className="each-library-card">
            <FontAwesomeIcon
              icon={faBook}
              className={`book-icon ${applyColorClass(index)}`}
            />
            <p>My Saved Library {index + 1}</p>
            <p>dd-mm-yy</p>
          </div>
        ))}
    </div>
  );
};

export default LibraryCards;
