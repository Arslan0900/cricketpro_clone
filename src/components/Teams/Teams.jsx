import React, { useEffect, useState } from "react";
import style from "./teams.module.scss";
import UpcomingMatchCard from "../UpcomingMatchCard/UpcomingMatchCard";
import TeamRanking from "../TeamRanking/TeamRanking";
import ReachUs from "../ReachUs/ReachUs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ScrollRestoration, useNavigate } from "react-router-dom";

const Teams = () => {
  const [openDrower, setOpenDrower] = useState(true);
  const [openSecondDrower, setOpenSecondDrower] = useState(false);
  const [selectedButton, setSelectedButton] = useState(5);
  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  const toggleBtn = () => {
    setOpenDrower(!openDrower);
    setOpenSecondDrower(false);
  };
  const toggleBtn2 = () => {
    setOpenSecondDrower(!openSecondDrower);
    setOpenDrower(false);
  };

  useEffect(() => {
    window.scrollTo(0, 250);
  }, [])
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate('/Livescore')
  };

  return (
    <div className={style.News}>
      <div className={style.News_box1}>
        <div className={style.headingBar}>
          <div className={style.headingbar_button_box}>
            <div
              className={`${style.headingBar_btn} ${
                selectedButton === 0 ? style.selected : ""
              }`}
              onClick={
                () => {
                  handleButtonClick(0);
                  navigateTo();}
              }
            >
              LIVE
            </div>
            <div
              className={`${style.headingBar_btn} ${
                selectedButton === 1 ? style.selected : ""
              }`}
              onClick={() => handleButtonClick(1)}
            >
              SCORECARD
            </div>
            <div
              className={`${style.headingBar_btn} ${
                selectedButton === 2 ? style.selected : ""
              }`}
              onClick={() => handleButtonClick(2)}
            >
              COMMENTARY
            </div>
            <div
              className={`${style.headingBar_btn} ${
                selectedButton === 3 ? style.selected : ""
              }`}
              onClick={() => handleButtonClick(3)}
            >
              NEWS
            </div>
            <div
              className={`${style.headingBar_btn} ${
                selectedButton === 4 ? style.selected : ""
              }`}
              onClick={() => handleButtonClick(4)}
            >
              PHOTOS
            </div>
            <div
              className={`${style.headingBar_btn} ${
                selectedButton === 5 ? style.selected : ""
              }`}
              onClick={() => handleButtonClick(5)}
            >
              TEAM
            </div>
            <div
              className={`${style.headingBar_btn} ${
                selectedButton === 6 ? style.selected : ""
              }`}
              onClick={() => handleButtonClick(6)}
            >
              PARTNERSHIP
            </div>
          </div>
        </div>
        <div
          className={style.news_box1_character_cards_box1}
          onClick={toggleBtn}
        >
          <div className={style.card_toggle_bar}>
            <div className={style.box_country_Name_box}>BANGLADESH</div>{" "}
            {/* Corrected "BANGLADASH" to "BANGLADESH" */}
            <div className={style.box_div_down_icon}>
              <RiArrowDropDownLine />
            </div>
          </div>
        </div>
        <div
          className={`${
            openDrower ? style.News_box1_drower_open : style.News_box1_drower
          }`}
        >
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          
        </div>
        <div
          className={style.news_box1_character_cards_box2}
          onClick={toggleBtn2}
        >
          <div className={style.card_toggle_bar}>
            <div className={style.box_country_Name_box}>INDIA</div>
            <div className={style.box_div_down_icon}>
              <RiArrowDropDownLine />
            </div>
          </div>
        </div>
        <div
          className={`${
            openSecondDrower
              ? style.News_box1_drower_open
              : style.News_box1_drower
          }`}
        >
           <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
          <div className={style.News_box1_drower_card}>
            <img src="./images/dhoni.webp" alt="" />
          </div>
        </div>
      </div>
      <div className={style.News_box2}>
        <UpcomingMatchCard />
        <TeamRanking />
        <ReachUs />
      </div>
    </div>
  );
};

export default Teams;
