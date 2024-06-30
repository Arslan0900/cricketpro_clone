import React, { useEffect } from "react";
import style from "./liveScoreNewsSinglePage.module.scss";
import { useParams } from "react-router-dom";
import { newsData } from "../Home/data";

const LiveScoreNewsSinglePage = () => {
  const { id } = useParams();

  // Assuming `newsData` is an array of objects with an 'id' property
  const data = newsData;

  // Filter the newsData array based on the id
  const filteredData = data.filter((item) => item.author === id);

  // Render the filtered data
  useEffect(() => {
    window.scrollTo(0, 250);
  }, []);
  return (
    <div className={style.container}>
      {console.log(filteredData)}
      {filteredData.length > 0 ? (
        <div key={filteredData[0].id} className={style.centerbox_box1}>
          {/* {item.author} */}
          <div className={style.center_box_image}>
            <img src={filteredData[0].urlToImage} alt="" />
          </div>
          <h1 className={style.title}>{filteredData[0].title}</h1>
          <p>{filteredData[0].content}</p>{" "}
          <p>{filteredData[0].description}</p>{" "}
          {/* Replace 'content' with the property you want to display */}
        </div>
      ) : (
        <p>No data found for this ID</p>
      )}
    </div>
  );
};

export default LiveScoreNewsSinglePage;
