import "./FlashSale.scss";
import { useTime } from "react-timer-hook";
import React from "react";
import Slider from "react-slick";
function FlashSale() {
  const { seconds, minutes, hours, ampm } = useTime({ format: "12-hour" });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  return (
    <div className="fls">
      <div className="container">
        <div className="flash-sale">
          <div className="header">
            <h3>FLASH SALE ONLINE</h3>
            <div className="timer" style={{ textAlign: "center" }}>
              <div className="time">
                <span>{hours}</span>:<span>{minutes}</span>:
                <span>{seconds}</span>
                <span>{ampm}</span>
              </div>
            </div>
          </div>
          <div className="content">
            <Slider {...settings}>
              <div className="list-item">
                <img src="./assets/images/Flashsale/flashsale_1.jpg" alt="" />
                <div className="info">
                  <a href="" className="title">
                    Samsung Galaxy Z Flip4 -128GB - Chính hãng
                  </a>
                  <span></span>
                </div>
              </div>
              <div>
                <img src="./assets/images/Flashsale/flashsale_2.png" alt="" />
              </div>
              <div className="list-item">
                <img src="./assets/images/Flashsale/flashsale_3.png" alt="" />
              </div>
              <div className="list-item">
                <img src="./assets/images/Flashsale/flashsale_4.png" alt="" />
              </div>
              <div className="list-item">
                <img src="./assets/images/Flashsale/flashsale_5.png" alt="" />
              </div>
              <div className="list-item">
                <img src="./assets/images/Flashsale/flashsale_6.png" alt="" />
              </div>
              <div>
                <img src="./assets/images/Flashsale/flashsale_7.png" alt="" />
              </div>
              <div className="list-item">
                <img src="./assets/images/Flashsale/flashsale_8.png" alt="" />
              </div>
              <div className="list-item">
                <img src="./assets/images/Flashsale/flashsale_9.png" alt="" />
              </div>
              <div className="list-item">
                <img src="./assets/images/Flashsale/flashsale_10.jpg" alt="" />
              </div>
              <div className="list-item">
                <img src="./assets/images/Flashsale/flashsale_11.png" alt="" />
              </div>
              <div className="list-item">
                <img src="./assets/images/Flashsale/flashsale_12.jpg" alt="" />
              </div>
              <div className="list-item">
                <img src="./assets/images/Flashsale/flashsale_13.png" alt="" />
              </div>
              <div className="list-item">
                <img src="./assets/images/Flashsale/flashsale_14.png" alt="" />
              </div>
              <div className="list-item">
                <img src="./assets/images/Flashsale/flashsale_15.png" alt="" />
              </div>
              <div className="list-item">
                <img src="./assets/images/Flashsale/flashsale_16.png" alt="" />
              </div>
              <div className="list-item">
                <img src="./assets/images/Flashsale/flashsale_17.png" alt="" />
              </div>
              <div className="list-item">
                <img src="./assets/images/Flashsale/flashsale_18.png" alt="" />
              </div>
              <div className="list-item">
                <img src="./assets/images/Flashsale/flashsale_19.png" alt="" />
              </div>
              <div className="list-item">
                <img src="./assets/images/Flashsale/flashsale_19.png" alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashSale;
