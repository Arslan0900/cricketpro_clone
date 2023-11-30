import React, { useState } from "react";
import style from "./upcomingMatchCard.module.scss";

const UpcomingMatchCard = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };
  return (
    <>
      <p>Upcoming Matches</p>
      <div className={style.Card_box}>
        <div className={style.Card_box_subbox}>
          <div
            className={`${style.Cardbox_subbox_btn} ${
              selectedButton === 0 ? style.selected : ""
            }`}
            onClick={() => handleButtonClick(0)}
          >
            Series
          </div>
          <div
            className={`${style.Cardbox_subbox_btn} ${
              selectedButton === 1 ? style.selected : ""
            }`}
            onClick={() => handleButtonClick(1)}
          >
            League
          </div>
        </div>
        <div className={style.Card_subbox_matchesdata}>
          <div className={style.Card_box_flag_box1}>
            <div className={style.card_flag_box}>
              <div className={style.flag_img}>
                <img
                  src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
                  alt="flag"
                />
              </div>
              <span className={style.country_name}>ENG</span>
            </div>
          </div>
          <div className={style.Card_box_time}>
            {" "}
            <span className={style.first_span}>22:23</span>
            <span className={style.sec_span}>Today</span>
          </div>
          <div className={style.Card_box_flag_box2}>
            <div className={style.card_flag_box}>
              <div className={style.flag_img}>
                <img
                  src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
                  alt="flag"
                />
              </div>
              <span className={style.country_name}>ENG</span>
            </div>
          </div>
        </div>
        <div className={style.Card_subbox_matchesdata}>
          <div className={style.Card_box_flag_box1}>
            <div className={style.card_flag_box}>
              <div className={style.flag_img}>
                <img
                  src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
                  alt="flag"
                />
              </div>
              <span className={style.country_name}>ENG</span>
            </div>
          </div>
          <div className={style.Card_box_time}>
            {" "}
            <span className={style.first_span}>22:23</span>
            <span className={style.sec_span}>Today</span>
          </div>
          <div className={style.Card_box_flag_box2}>
            <div className={style.card_flag_box}>
              <div className={style.flag_img}>
                <img
                  src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
                  alt="flag"
                />
              </div>
              <span className={style.country_name}>ENG</span>
            </div>
          </div>
        </div>
        <div className={style.Card_subbox_matchesdata}>
          <div className={style.Card_box_flag_box1}>
            <div className={style.card_flag_box}>
              <div className={style.flag_img}>
                <img
                  src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
                  alt="flag"
                />
              </div>
              <span className={style.country_name}>ENG</span>
            </div>
          </div>
          <div className={style.Card_box_time}>
            {" "}
            <span className={style.first_span}>22:23</span>
            <span className={style.sec_span}>Today</span>
          </div>
          <div className={style.Card_box_flag_box2}>
            <div className={style.card_flag_box}>
              <div className={style.flag_img}>
                <img
                  src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
                  alt="flag"
                />
              </div>
              <span className={style.country_name}>ENG</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingMatchCard;
