import React from "react";
import style from "./keySeriesCard.module.scss";

const KeySeriesCard = () => {
  return (
    <>
      <p>Key Series</p>
      <div className={style.Card_box}>
        <div className={style.Card_subbox_matchesdata}>
          <div className={style.first_team}>
            <div className={style.card_flag_box}>
              <div className={style.flag_img}>
                <img
                  src="./images/england.png"
                  alt="flag"
                />
              </div>
              <span className={style.country_name}>ENG</span>
            </div>
          </div>
          <div className={style.vs_text}>vs</div>
          <div className={style.sec_team}>
          <div className={style.card_flag_box}>
              <div className={style.flag_img}>
                <img
                  src="./images/pakistan.png"
                  alt="flag"
                />
              </div>
              <span className={style.country_name}>Pak</span>
            </div>
          </div>
        </div>
        <div className={style.Card_subbox_matchesdata}>
          <div className={style.first_team}>
            <div className={style.card_flag_box}>
              <div className={style.flag_img}>
                <img
                  src="./images/india.png"
                  alt="flag"
                />
              </div>
              <span className={style.country_name}>Ind</span>
            </div>
          </div>
          <div className={style.vs_text}>vs</div>
          <div className={style.sec_team}>
          <div className={style.card_flag_box}>
              <div className={style.flag_img}>
                <img
                  src="./images/england.png"
                  alt="flag"
                />
              </div>
              <span className={style.country_name}>ENG</span>
            </div>
          </div>
        </div>
        <div className={style.Card_subbox_matchesdata}>
          <div className={style.first_team}>
            <div className={style.card_flag_box}>
              <div className={style.flag_img}>
                <img
                  src="./images/pakistan.png"
                  alt="flag"
                />
              </div>
              <span className={style.country_name}>Pak</span>
            </div>
          </div>
          <div className={style.vs_text}>vs</div>
          <div className={style.sec_team}>
          <div className={style.card_flag_box}>
              <div className={style.flag_img}>
                <img
                  src="./images/india.png"
                  alt="flag"
                />
              </div>
              <span className={style.country_name}>Ind</span>
            </div>
          </div>
        </div>
        <div className={style.Card_subbox_matchesdata}>
          <div className={style.first_team}>
            <div className={style.card_flag_box}>
              <div className={style.flag_img}>
                <img
                  src="./images/england.png"
                  alt="flag"
                />
              </div>
              <span className={style.country_name}>ENG</span>
            </div>
          </div>
          <div className={style.vs_text}>vs</div>
          <div className={style.sec_team}>
          <div className={style.card_flag_box}>
              <div className={style.flag_img}>
                <img
                  src="./images/pakistan.png"
                  alt="flag"
                />
              </div>
              <span className={style.country_name}>Pak</span>
            </div>
          </div>
        </div>
        <div className={style.Card_subbox_matchesdata}>
          <div className={style.first_team}>
            <div className={style.card_flag_box}>
              <div className={style.flag_img}>
                <img
                  src="./images/england.png"
                  alt="flag"
                />
              </div>
              <span className={style.country_name}>ENG</span>
            </div>
          </div>
          <div className={style.vs_text}>vs</div>
          <div className={style.sec_team}>
          <div className={style.card_flag_box}>
              <div className={style.flag_img}>
                <img
                  src="./images/india.png"
                  alt="flag"
                />
              </div>
              <span className={style.country_name}>Ind</span>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default KeySeriesCard;
