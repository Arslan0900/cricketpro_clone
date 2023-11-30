import React from "react";
import style from "./featuredVideo.module.scss";
import Carousel from "react-multi-carousel";

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
            <div className={style.Carousel_item}>
              <img
                src="https://demo.themeies.com/cricnotch/assets/images/posts/2.jpg"
                alt=""
              />

              <div className={style.Carousel_title}>
                Strength to smarts:How Smith has levelled up{" "}
              </div>
              <div className={style.Carousel_time}>20 hours ago</div>
            </div>
            <div className={style.Carousel_item}>
              <img
                src="https://demo.themeies.com/cricnotch/assets/images/posts/2.jpg"
                alt=""
              />
              <div className={style.Carousel_title}>
                Strength to smarts:How Smith has levelled up{" "}
              </div>
              <div className={style.Carousel_time}>20 hours ago</div>
            </div>
            <div className={style.Carousel_item}>
              <img
                src="https://demo.themeies.com/cricnotch/assets/images/posts/2.jpg"
                alt=""
              />
              <div className={style.Carousel_title}>
                Strength to smarts:How Smith has levelled up{" "}
              </div>
              <div className={style.Carousel_time}>20 hours ago</div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default FeaturedVideos;
