import React, { useEffect, useState } from "react";
import style from "./homePage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCricketData,
  fetchNewsData,
  startFetchingData,
} from "../../Action/action";
import UpcomingMatchCard from "../UpcomingMatchCard/UpcomingMatchCard";
import KeySeriesCard from "../KeySeriesCard/KeySeriesCard";
import TeamRanking from "../TeamRanking/TeamRanking";
import PopularNews from "../PopularNews/PopularNews";
import FeaturedVideos from "../FeaturedVideos/FeaturedVideos";
import ReachUs from "../ReachUs/ReachUs";
import {  useNavigate } from "react-router-dom";
import { newsData } from "./data";

const HomePage = () => {
  const data = useSelector((state) => state.getApidata.apiData);
  // console.log(data);
  const Newsdata = useSelector((state) => state.NewsApiData.newApiData);
  // console.log(Newsdata);
  const dispatch = useDispatch();
  const [itemsToShow, setItemsToShow] = useState(7);
  // console.log(itemsToShow);

  // useEffect(() => {
  //   // Fetch cricket data immediately when the component mounts
  //   dispatch(fetchCricketData());
  //   // Set up an interval to fetch cricket data every 9 seconds
  //   const intervalId = setInterval(() => {
  //     dispatch(fetchCricketData());
  //   }, 9000);

  //   // Don't forget to clear the interval when the component unmounts
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [dispatch]);
  // useEffect(() => {
  //   dispatch(fetchNewsData());
  // }, []);

  const loadMore = () => {
    setItemsToShow(itemsToShow + 5);
  };
  // const [selectedButton, setSelectedButton] = useState(0);

  // const handleButtonClick = (index) => {
  //   setSelectedButton(index);
  // };
  const navigate = useNavigate()
  const navigatetosinglepage = (id) => {
   navigate(`/LiveScoreNewsSinglePage/${id}`)
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []) 
  return (
    <div className={style.main_div_home_page}>
      <div className={style.leftbox}>
        <UpcomingMatchCard />
        <KeySeriesCard />
        <TeamRanking />
      </div>
      <div className={style.centerbox}>
        <p>Featured</p>
        {/* <div className={style.live_Single_card}>
          {data.slice(0, 1).map((item) => {
            return <>
            {item.id}
            </>;
          })}
        </div> */}
        
        {newsData.slice(0, itemsToShow).map((item, index) => {
          // Check if the 'urlToImage' is not null or undefined
          if (item.urlToImage && item.author !== null) {
            return (
              <div key={item.id} className={style.centerbox_box1} onClick={()=>navigatetosinglepage(item.author)}>
                {/* {item.author} */}
                <div className={style.center_box_image}>
                  <img src={item.urlToImage} alt="" />
                </div>
                <div className={style.title}>{item.title}</div>
              </div>
            );
          }
          // If 'urlToImage' is null or undefined, don't render anything for this item
          return null;
        })}

        {itemsToShow < newsData.length && ( // Newdata chnage it when you connect this with backend
          <div className={style.loading_btn_box}>
            <div className={style.load_more_btn} onClick={loadMore}>
              Load More
            </div>
          </div>
        )}
      </div>
      <div className={style.rightbox}>
        <PopularNews />
        <FeaturedVideos />
        <ReachUs />
      </div>
    </div>
  );
};

export default React.memo(HomePage);
