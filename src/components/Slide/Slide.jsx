import "./Slide.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Slide() {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slide">
      <Slider {...settings}>
        <div>
          <img src="./assets/images/slide_1.jpg" alt="" />
        </div>
        <div>
          <img src="./assets/images/slide_2.jpg" alt="" />
        </div>
        <div>
          <img src="./assets/images/slide_3.jpg" alt="" />
        </div>
        <div>
          <img src="./assets/images/slide_4.jpg" alt="" />
        </div>
        <div>
          <img src="./assets/images/slide_5.jpg" alt="" />
        </div>
        <div>
          <img src="./assets/images/slide_6.jpg" alt="" />
        </div>
        <div>
          <img src="./assets/images/slide_7.jpg" alt="" />
        </div>
        <div>
          <img src="./assets/images/slide_8.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Slide;
