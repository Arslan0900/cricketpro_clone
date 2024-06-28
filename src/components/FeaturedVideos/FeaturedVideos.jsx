import React from "react";
import style from "./featuredVideo.module.scss";
import Carousel from "react-multi-carousel";
import { newsData } from "../Home/data";

const FeaturedVideos = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 1550, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <p>Featured videos</p>
      <div className={style.FeaturedVideos}>
        <div className={style.Carousel}>
          <Carousel
            showDots={true}
            responsive={responsive}
            removeArrowOnDeviceType={[
              "tablet",
              "mobile",
              "desktop",
              "superLargeDesktop",
            ]}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            {newsData.slice(0, 5).map((item, index) => (
              <div className={style.Carousel_item} key={index}>
                <img
                  src={item.urlToImage}
                  alt={item.title}
                />
                <div className={style.Carousel_title}>
                  {item.title}
                </div>
                <div className={style.Carousel_time}>{item.time}</div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default FeaturedVideos;
