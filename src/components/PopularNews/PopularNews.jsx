import React from "react";
import style from "./popularNews.module.scss";

const PopularNews = () => {
  return (
    <>
      <p>Popular News</p>
      <div className={style.PopularNews_container}>

       <div className={style.popularNews}>
        <div className={style.image_box}>
          <img
            src="https://demo.themeies.com/cricnotch/assets/images/posts/thumbs/4.jpg"
            alt="news"
          />
        </div>
        <div className={style.news_title}>
          strength to smarts:
          <br />
          How smith has levelled up
          <div className={style.news_span}>02 hours ago</div>
        </div>
      </div> 
       <div className={style.popularNews}>
        <div className={style.image_box}>
          <img
            src="https://demo.themeies.com/cricnotch/assets/images/posts/thumbs/4.jpg"
            alt="news"
          />
        </div>
        <div className={style.news_title}>
          strength to smarts:
          <br />
          How smith has levelled up
          <div className={style.news_span}>02 hours ago</div>
        </div>
      </div> 
       <div className={style.popularNews}>
        <div className={style.image_box}>
          <img
            src="https://demo.themeies.com/cricnotch/assets/images/posts/thumbs/4.jpg"
            alt="news"
          />
        </div>
        <div className={style.news_title}>
          strength to smarts:
          <br />
          How smith has levelled up
          <div className={style.news_span}>02 hours ago</div>
        </div>
      </div> 
       <div className={style.popularNews}>
        <div className={style.image_box}>
          <img
            src="https://demo.themeies.com/cricnotch/assets/images/posts/thumbs/4.jpg"
            alt="news"
          />
        </div>
        <div className={style.news_title}>
          strength to smarts:
          <br />
          How smith has levelled up
          <div className={style.news_span}>02 hours ago</div>
        </div>
      </div> 
       <div className={style.popularNews}>
        <div className={style.image_box}>
          <img
            src="https://demo.themeies.com/cricnotch/assets/images/posts/thumbs/4.jpg"
            alt="news"
          />
        </div>
        <div className={style.news_title}>
          strength to smarts:
          <br />
          How smith has levelled up
          <div className={style.news_span}>02 hours ago</div>
        </div>
      </div> 
    </div>
    </>
  );
};

export default PopularNews;

// import React from "react";
// import style from "./popularNews.module.scss";
// import { useSelector } from "react-redux";

// const PopularNews = () => {
//   const Newsdata = useSelector((state) => state.NewsApiData.newApiData);

//   // Reverse the Newsdata array
//   const reversedNewsdata = [...Newsdata].reverse();

//   console.log(reversedNewsdata);

//   const maxItemsToShow = 5;
//   let itemsShown = 0;

//   return (
//     <>
//       <p>Popular News</p>
//       <div className={style.PopularNews_container}>
//         {reversedNewsdata.map((news) => {
//           if (itemsShown >= maxItemsToShow) {
//             // If the maximum number of items is already reached, return null for the rest.
//             return null;
//           }

//           if (news.urlToImage) {
//             // Only count and render items with a valid 'urlToImage'.
//             itemsShown++;
//             return (
//               <div key={news.id} className={style.popularNews}>
//                 <div className={style.image_box}>
//                   <img src={news.urlToImage} alt="news" />
//                 </div>
//                 <div className={style.news_title}>
//                   strength to smarts:
//                   <br />
//                   How smith has leveled up
//                   <div className={style.news_span}>02 hours ago</div>
//                 </div>
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>
//     </>
//   );
// };

// export default PopularNews;
