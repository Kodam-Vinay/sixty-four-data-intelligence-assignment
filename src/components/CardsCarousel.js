import { useState } from "react";
import useGetData from "../hooks/useGetData";
import "../css/CardsCarousel.css";
import { Bounce, ToastContainer, toast } from "react-toastify";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ErrorPage from "./ErrorPage";

const CardsCarousel = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  useGetData({ setData, limit, setIsError, setError });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const onClickViewMore = () => {
    if (limit <= 20) {
      setLimit(limit + 5);
    }
  };
  if (isError) {
    toast.error(error, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  return (
    <div className="carousel-container">
      <ToastContainer />

      {!isError && data.length > 0 ? (
        <div className="slider-and-more-button-container">
          <Slider {...settings}>
            {data.map((each) => (
              <div key={each?.id} className="each-carousel-container">
                <img
                  className="carousel-image"
                  src={each?.image}
                  alt={each?.title}
                />
              </div>
            ))}
          </Slider>
          <button onClick={onClickViewMore}>View More</button>
        </div>
      ) : !isError && data.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <ErrorPage error={error} />
      )}
    </div>
  );
};

export default CardsCarousel;
