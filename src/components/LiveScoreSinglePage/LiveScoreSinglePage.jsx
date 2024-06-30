import React, { useEffect, useState } from "react";
import style from "./liveScoreSinglePage.module.scss";
import { useParams } from "react-router-dom";
import UpcomingMatchCard from "../UpcomingMatchCard/UpcomingMatchCard";
import TeamRanking from "../TeamRanking/TeamRanking";
import ReachUs from "../ReachUs/ReachUs";
import { RiArrowDropDownLine } from "react-icons/ri";

const LiveScoreSinglePage = () => {
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
  }, []);

  return (
    <div className={style.News}>
      <div className={style.News_box1}>
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
            <div className={style.tableContainer}>
              <table className={style.table}>
                <thead>
                  <tr>
                    <th></th>
                    <th className={style.thead_text}>Team</th>
                    <th className={style.thead_text2}>Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={style.whiteRow}>
                    <td>01.</td>
                    <td className={style.table_display_data_div}>
                      <span className={style.img_span}>
                        <img
                          className={style.table_flag_img}
                          src="./images/england.png"
                          alt="flag"
                        />
                      </span>
                      <span>Pakistan</span>
                    </td>
                    <td>372</td>
                  </tr>
                  <tr
                    style={{ background: "white" }}
                    className={style.whiteRow}
                  >
                    <td>02.</td>
                    <td className={style.table_display_data_div}>
                      <span className={style.img_span}>
                        <img
                          className={style.table_flag_img}
                          src="./images/pakistan.png"
                          alt="flag"
                        />
                      </span>
                      <span>India</span>
                    </td>
                    <td>272</td>
                  </tr>
                  <tr className={style.whiteRow}>
                    <td>03.</td>
                    <td className={style.table_display_data_div}>
                      <span className={style.img_span}>
                        <img
                          className={style.table_flag_img}
                          src="./images/india.png"
                          alt="flag"
                        />
                      </span>
                      <span>England</span>
                    </td>
                    <td>272</td>
                  </tr>
                  <tr
                    style={{ background: "white" }}
                    className={style.whiteRow}
                  >
                    <td>04.</td>
                    <td className={style.table_display_data_div}>
                      <span className={style.img_span}>
                        <img
                          className={style.table_flag_img}
                          src="./images/pakistan.png"
                          alt="flag"
                        />
                      </span>
                      <span>Australia</span>
                    </td>
                    <td>272</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/*this is the drower div*/}
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
          <table className={style.table}>
                <thead>
                  <tr>
                    <th></th>
                    <th className={style.thead_text}>Team</th>
                    <th className={style.thead_text2}>Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={style.whiteRow}>
                    <td>01.</td>
                    <td className={style.table_display_data_div}>
                      <span className={style.img_span}>
                        <img
                          className={style.table_flag_img}
                          src="./images/england.png"
                          alt="flag"
                        />
                      </span>
                      <span>Pakistan</span>
                    </td>
                    <td>372</td>
                  </tr>
                  <tr
                    style={{ background: "white" }}
                    className={style.whiteRow}
                  >
                    <td>02.</td>
                    <td className={style.table_display_data_div}>
                      <span className={style.img_span}>
                        <img
                          className={style.table_flag_img}
                          src="./images/pakistan.png"
                          alt="flag"
                        />
                      </span>
                      <span>India</span>
                    </td>
                    <td>272</td>
                  </tr>
                  <tr className={style.whiteRow}>
                    <td>03.</td>
                    <td className={style.table_display_data_div}>
                      <span className={style.img_span}>
                        <img
                          className={style.table_flag_img}
                          src="./images/india.png"
                          alt="flag"
                        />
                      </span>
                      <span>England</span>
                    </td>
                    <td>272</td>
                  </tr>
                  <tr
                    style={{ background: "white" }}
                    className={style.whiteRow}
                  >
                    <td>04.</td>
                    <td className={style.table_display_data_div}>
                      <span className={style.img_span}>
                        <img
                          className={style.table_flag_img}
                          src="./images/pakistan.png"
                          alt="flag"
                        />
                      </span>
                      <span>Australia</span>
                    </td>
                    <td>272</td>
                  </tr>
                </tbody>
              </table>
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

export default LiveScoreSinglePage;
