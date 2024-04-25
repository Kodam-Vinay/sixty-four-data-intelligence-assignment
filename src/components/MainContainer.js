import Header from "./Header";
import "../css/MainContainer.css";
import LibraryCards from "./LibraryCards";
import CardsCarousel from "./CardsCarousel";
import RecentReleasesContainer from "./RecentReleasesContainer";

const MainContainer = () => {
  return (
    <div className="main-container">
      <Header />
      <LibraryCards />
      <div className="carousel-recent-container">
        <CardsCarousel />
        <RecentReleasesContainer />
      </div>
    </div>
  );
};

export default MainContainer;
