import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../CardLiveScore/Card";
import style from "./series.module.scss";
import { useDispatch, useSelector } from "react-redux";
// import { fetchCricketData, startFetchingData } from "../../Action/action";
import UpcomingMatchCard from "../UpcomingMatchCard/UpcomingMatchCard";
import TeamRanking from "../TeamRanking/TeamRanking";
import ReachUs from "../ReachUs/ReachUs";
import { liveScoreData } from "../LiveScore/data";
// import { liveScoreData } from "./data";

const Series = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     dispatch(fetchCricketData());
  //   }, 9000);

  //   // Don't forget to clear the interval when the component unmounts
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [dispatch]);

  const data = liveScoreData;
  // const data = useSelector((state) => state.getApidata.apiData);
  console.log(data);

  const [selectedButton, setSelectedButton] = useState(3);
  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };
  

  // Filter the matches based on the selected button
  const filteredMatches = data.filter((match) => {
    if (selectedButton === 0) {
      return match.match_status === "Live";
    } else if (selectedButton === 1) {
      // Replace 'Upcoming' with the actual event_status value for upcoming matches
      return match.match_status === `${"Upcoming" && "Not Started Yet"}`;
    } else if (selectedButton === 2) {
      return match.match_status === "RESULT";
    } else if (selectedButton === 3) {
      return true;
    }
    return true; // Show all matches if no button is selected
  });

  return (
    <>
      <div className={style.LiveScore}>
        <div className={style.Box1}>
          <div className={style.headingBar}>
            <div className={style.headingbar_button_box}>
              <div
                className={`${style.headingBar_btn} ${
                  selectedButton === 0 ? style.selected : ""
                }`}
                onClick={() => handleButtonClick(0)}
              >
                LIVE
              </div>
              <div
                className={`${style.headingBar_btn} ${
                  selectedButton === 1 ? style.selected : ""
                }`}
                onClick={() => handleButtonClick(1)}
              >
                UPCOMING
              </div>
              <div
                className={`${style.headingBar_btn} ${
                  selectedButton === 2 ? style.selected : ""
                }`}
                onClick={() => handleButtonClick(2)}
              >
                RESULT
              </div>
              <div
                className={`${style.headingBar_btn} ${
                  selectedButton === 3 ? style.selected : ""
                }`}
                onClick={() => handleButtonClick(3)}
              >
                ALL
              </div>
            </div>
          </div>
          <div className={style.LiveScore_card}>
            {filteredMatches.map((match) => (
              <Card key={match.id} data={match}  />
              // <Card key={match.id} data={match} handleSeriesButtonClick={handleSeriesButtonClick} />
            ))}
          </div>
        </div>
        <div className={style.Box2}>
          <UpcomingMatchCard/>  
          <TeamRanking/>
          <ReachUs/>
        </div>
      </div>
    </>
  );
};

export default React.memo(Series);
