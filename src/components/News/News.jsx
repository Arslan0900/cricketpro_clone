import React, { useState } from "react";
import style from "./news.module.scss";
import { newsData } from "../Home/data";
import {  useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate()
  const navigatetosinglepage = (id) => {
    navigate(`/LiveScoreNewsSinglePage/${id}`)
  }
  const Data = newsData;
  // console.log(Data);

  return (
    <>
      <div className={style.News}>
        {Data.map((data) => (
          <div key={data.id} className={style.Main_box} onClick={()=>navigatetosinglepage(data.author)}>
          {/* {item.author} */}
          <div className={style.box_image}>
            <img src={data.urlToImage} alt="" />
          </div>
          <div className={style.title}>{data.title}</div>
        </div>
        ))}
      </div>
    </>
  );
};

export default News;
