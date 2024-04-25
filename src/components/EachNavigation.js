import "../css/Sidebar.css";

const EachNavigation = ({ navigationDetails }) => {
  const { navigation, element } = navigationDetails;
  return (
    <div className="each-navigation-element">
      <button className="button sidebar-button">{element}</button>
    </div>
  );
};

export default EachNavigation;
