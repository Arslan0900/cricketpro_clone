// import React from "react";
// import style from "./popularNews.module.scss";

// const PopularNews = () => {
//   return (
//     <>
//       <p>Popular News</p>
//       <div className={style.PopularNews_container}>

//        <div className={style.popularNews}>
//         <div className={style.image_box}>
//           <img
//             src="https://demo.themeies.com/cricnotch/assets/images/posts/thumbs/4.jpg"
//             alt="news"
//           />
//         </div>
//         <div className={style.news_title}>
//           strength to smarts:
//           <br />
//           How smith has levelled up
//           <div className={style.news_span}>02 hours ago</div>
//         </div>
//       </div> 
//        <div className={style.popularNews}>
//         <div className={style.image_box}>
//           <img
//             src="https://demo.themeies.com/cricnotch/assets/images/posts/thumbs/4.jpg"
//             alt="news"
//           />
//         </div>
//         <div className={style.news_title}>
//           strength to smarts:
//           <br />
//           How smith has levelled up
//           <div className={style.news_span}>02 hours ago</div>
//         </div>
//       </div> 
//        <div className={style.popularNews}>
//         <div className={style.image_box}>
//           <img
//             src="https://demo.themeies.com/cricnotch/assets/images/posts/thumbs/4.jpg"
//             alt="news"
//           />
//         </div>
//         <div className={style.news_title}>
//           strength to smarts:
//           <br />
//           How smith has levelled up
//           <div className={style.news_span}>02 hours ago</div>
//         </div>
//       </div> 
//        <div className={style.popularNews}>
//         <div className={style.image_box}>
//           <img
//             src="https://demo.themeies.com/cricnotch/assets/images/posts/thumbs/4.jpg"
//             alt="news"
//           />
//         </div>
//         <div className={style.news_title}>
//           strength to smarts:
//           <br />
//           How smith has levelled up
//           <div className={style.news_span}>02 hours ago</div>
//         </div>
//       </div> 
//        <div className={style.popularNews}>
//         <div className={style.image_box}>
//           <img
//             src="https://demo.themeies.com/cricnotch/assets/images/posts/thumbs/4.jpg"
//             alt="news"
//           />
//         </div>
//         <div className={style.news_title}>
//           strength to smarts:
//           <br />
//           How smith has levelled up
//           <div className={style.news_span}>02 hours ago</div>
//         </div>
//       </div> 
//     </div>
//     </>
//   );
// };

// export default PopularNews;

import React from "react";
import style from "./popularNews.module.scss";
import { useSelector } from "react-redux";
import { newsData } from "../Home/data";
import { useNavigate } from "react-router-dom";


const PopularNews = () => {
  // const Newsdata = useSelector((state) => state.NewsApiData.newApiData);//chnage when backend connect
  const Newsdata = newsData;
  // Reverse the Newsdata array
  const reversedNewsdata = [...Newsdata].reverse();

  console.log(reversedNewsdata);

  const maxItemsToShow = 5;
  let itemsShown = 0;

  const navigate = useNavigate()
  const navigatetosinglepage = (id) => {
   navigate(`/LiveScoreNewsSinglePage/${id}`)
  } 

  return (
    <>
      <p>Popular News</p>
      <div className={style.PopularNews_container}>
        {reversedNewsdata.map((news) => {
          if (itemsShown >= maxItemsToShow) {
            // If the maximum number of items is already reached, return null for the rest.
            return null;
          }

          if (news.urlToImage && news.author !== null ) {
            // Only count and render items with a valid 'urlToImage'.
            itemsShown++;
            {console.log(news.author)}
            return (
              <div key={news.id} className={style.popularNews} onClick={()=>navigatetosinglepage(news.author)}>
                <div className={style.image_box}>
                  <img src={news.urlToImage} alt="news" />
                </div>
                <div className={style.news_title}>
                  {news.title}
                  <br />
                  <p>
                  How smith has leveled up
                  </p>
                  <div className={style.news_span}>02 hours ago</div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
};

export default PopularNews;
