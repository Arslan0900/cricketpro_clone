import React, { useState } from "react";
import style from "./card.module.scss";

const Card = (items) => {
  let item = items.data;
  console.log(item);
  const [selectedSeriesButton, setSelectedSeriesButton] = useState(0);
  // console.log(selectedSeriesButton)

  const handleSeriesButtonClick = (index) => {
    setSelectedSeriesButton(index);
  };

  return (
    <>
      <div className={style.card}>
        <div className={style.card_box1}>
          <div className={style.card_box1_innerbox}>
            <div className={style.innerBox_match_status_box}>
              {item.match_status}
            </div>
            <div className={style.innerbox_location_box}>
              {item.location_name}
            </div>
            <div className={style.innerbox_match_Score_box}>
              {item.teams.map((team, teamIndex) => (
                <React.Fragment key={teamIndex}>
                  <div
                    className={
                      teamIndex === 0
                        ? style.carousel_card_score_team
                        : style.carousel_card_score_team_reverse
                    }
                  >
                    <div className={style.card_flag_box}>
                      <div className={style.flag_img}>
                        <img
                          src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
                          alt="flag"
                        />
                      </div>
                      <span className={style.country_name}>
                        {team.team_name}
                      </span>
                    </div>
                    <div className={style.card_match_score}>
                      <span>{team.scores}</span>
                      <span className={style.span_over}>
                        {team.overs ? (
                          <span>{team.overs.split(" ")[0]})</span>
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                  </div>
                  {teamIndex === 0 ? (
                    <div className={style.vs_div}>vs</div>
                  ) : null}
                </React.Fragment>
              ))}
            </div>
            <div className={style.innerbox_Result_box}>{item.event_status}</div>
          </div>
        </div>
        <hr />
        <div className={style.card_box2}>
          <div className={style.card_btn_box}>
            <div
              className={`${style.box_btn1} ${
                selectedSeriesButton === 0 ? style.selected : ""
              }`}
              onClick={() => handleSeriesButtonClick(0)}
            >
              LIVE SCORE
            </div>
            <div
              className={`${style.box_btn2} ${
                selectedSeriesButton === 1 ? style.selected : ""
              }`}
              onClick={() => handleSeriesButtonClick(1)}
            >
              SERIES HOME
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
