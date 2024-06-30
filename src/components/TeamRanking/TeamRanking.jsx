import React, { useState } from "react";
import style from "./teamRanking.module.scss";
import { useNavigate } from "react-router-dom";

const TeamRanking = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };
  const Navigate = useNavigate();
  const NavigateTONewspage = () => {
    Navigate('/teams');
  };
  return (
    <>
      <p>Team Ranking</p>
      <div className={style.Card_box}>
        <div className={style.Card_box_subbox}>
          <div
            className={`${style.Cardbox_subbox_btn} ${
              selectedButton === 0 ? style.selected : ""
            }`}
            onClick={() => handleButtonClick(0)}
          >
            T20
          </div>
          <div
            className={`${style.Cardbox_subbox_btn} ${
              selectedButton === 1 ? style.selected : ""
            }`}
            onClick={() => handleButtonClick(1)}
          >
            ODI
          </div>
          <div
            className={`${style.Cardbox_subbox_btn} ${
              selectedButton === 2 ? style.selected : ""
            }`}
            onClick={() => handleButtonClick(2)}
          >
            Test
          </div>
        </div>
        <div className={style.ranking_card_content_box}>
          {/* <div className={style.ranking_content_headings}>
                    <p>TEAM</p>
                    <p>POINTS</p>
                </div>
                <div className={style.ranking_content_data}> */}
          {/* </div> */}
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
                      src="./images/pakistan.png"
                      alt="flag"
                    /></span>
                    <span>Pakistan</span>
                  </td>
                  <td>372</td>
                </tr>
                <tr style={{background:'lightgray'}} className={style.whiteRow}>
                  <td>02.</td>
                  <td className={style.table_display_data_div}>
                    <span className={style.img_span}>
                    <img
                      className={style.table_flag_img}
                      src="./images/india.png"
                      alt="flag"
                    /></span>
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
                      src="./images/england.png"
                      alt="flag"
                    /></span>
                    <span>England</span>
                  </td>
                  <td>272</td>
                </tr>
                <tr style={{background:'lightgray'}} className={style.whiteRow}>
                  <td>04.</td>
                  <td className={style.table_display_data_div}>
                    <span className={style.img_span}>
                    <img
                      className={style.table_flag_img}
                      src="./images/england.png"
                      alt="flag"
                    /></span>
                    <span>Australia</span>
                  </td>
                  <td>272</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={style.card_btn} onClick={NavigateTONewspage}>See all stats</div>
      </div>
    </>
  );
};

export default TeamRanking;
