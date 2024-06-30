import React from 'react';
import style from "./reachUs.module.scss";

const ReachUs = () => {
  return (
    <>
    <p>Reach us on</p>
        <div className={style.rightbox_box3}>
          <div className={style.rightbox_box3_subBox1}>
            <img src="./images/facebook.svg" alt="" />
          </div>
          <div className={style.rightbox_box3_subBox2}>
            <img src="./images/twitter.png" alt="" />

          </div>
          <div className={style.rightbox_box3_subBox3}>
            <img src="./images/Instagram.png" alt="" />

          </div>
        </div>
    </>
  )
}

export default ReachUs