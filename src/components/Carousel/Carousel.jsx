import React from "react";
import style from "./carousel.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";

const CarouselPage = () => {
  const data = useSelector((state) => state.getApidata.apiData);
  // console.log(data);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 1550, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={style.Carousel}>
      <Carousel
        // swipeable={true}
        //   draggable={false}
        // showDots={true}
        responsive={responsive}
        //   ssr={true} // means to render carousel on server-side.
        // infinite={true}
        // autoPlay={true}
        autoPlaySpeed={5000}
        // keyBoardControl={true}
        // customTransition="all .5"
        //   transitionDuration={500}
        //   containerClass="carousel-container"

        removeArrowOnDeviceType={[
          "tablet",
          "mobile",
          "desktop",
          "superLargeDesktop",
        ]}
        //   deviceType={this.props.deviceType}
        //   dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      >
        
              <div className={style.carousel_card} >
                 Live
                <div className={style.carousel_card_score}>
                  <div className={style.carousel_card_score_team1}>
                    <div className={style.card_flag_box}>
                      <div className={style.flag_img}>
                        <img
                          src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
                          alt="flag"
                        />
                      </div>
                      <span className={style.country_name}>ENG</span>
                    </div>
                    <div className={style.card_match_score}>
                      <span>
                        146/6
                      </span>
                      <span  className={style.span_over}>
                        20.0 ov
                      </span>
                    </div>
                  </div>
                  <div className={style.carousel_card_score_team2}>
                  <div className={style.card_match_score}>
                      <span>
                        146/6
                      </span>
                      <span className={style.span_score}>
                        20.0 ov
                      </span>
                    </div>
                  <div className={style.card_flag_box}>
                      <div className={style.flag_img}>
                        <img
                          src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
                          alt="flag"
                        />
                      </div>
                      <span className={style.country_name}>ENG</span>
                    </div>
                  </div>
                </div>
                <div className={style.carousel_card_target}>Target 230</div>
                <div className={style.carousel_card_details}>
                  India need 27 runs in 13 balls.
                </div>
              </div>
              <div className={style.carousel_card} >
                 Live
                <div className={style.carousel_card_score}>
                  <div className={style.carousel_card_score_team1}>
                    <div className={style.card_flag_box}>
                      <div className={style.flag_img}>
                        <img
                          src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
                          alt="flag"
                        />
                      </div>
                      <span className={style.country_name}>ENG</span>
                    </div>
                    <div className={style.card_match_score}>
                      <span>
                        146/6
                      </span>
                      <span  className={style.span_over}>
                        20.0 ov
                      </span>
                    </div>
                  </div>
                  <div className={style.carousel_card_score_team2}>
                  <div className={style.card_match_score}>
                      <span>
                        146/6
                      </span>
                      <span className={style.span_score}>
                        20.0 ov
                      </span>
                    </div>
                  <div className={style.card_flag_box}>
                      <div className={style.flag_img}>
                        <img
                          src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
                          alt="flag"
                        />
                      </div>
                      <span className={style.country_name}>ENG</span>
                    </div>
                  </div>
                </div>
                <div className={style.carousel_card_target}>Target 230</div>
                <div className={style.carousel_card_details}>
                  India need 27 runs in 13 balls.
                </div>
              </div>
              <div className={style.carousel_card} >
                 Live
                <div className={style.carousel_card_score}>
                  <div className={style.carousel_card_score_team1}>
                    <div className={style.card_flag_box}>
                      <div className={style.flag_img}>
                        <img
                          src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
                          alt="flag"
                        />
                      </div>
                      <span className={style.country_name}>ENG</span>
                    </div>
                    <div className={style.card_match_score}>
                      <span>
                        146/6
                      </span>
                      <span  className={style.span_over}>
                        20.0 ov
                      </span>
                    </div>
                  </div>
                  <div className={style.carousel_card_score_team2}>
                  <div className={style.card_match_score}>
                      <span>
                        146/6
                      </span>
                      <span className={style.span_score}>
                        20.0 ov
                      </span>
                    </div>
                  <div className={style.card_flag_box}>
                      <div className={style.flag_img}>
                        <img
                          src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
                          alt="flag"
                        />
                      </div>
                      <span className={style.country_name}>ENG</span>
                    </div>
                  </div>
                </div>
                <div className={style.carousel_card_target}>Target 230</div>
                <div className={style.carousel_card_details}>
                  India need 27 runs in 13 balls.
                </div>
              </div>
              <div className={style.carousel_card} >
                 Live
                <div className={style.carousel_card_score}>
                  <div className={style.carousel_card_score_team1}>
                    <div className={style.card_flag_box}>
                      <div className={style.flag_img}>
                        <img
                          src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
                          alt="flag"
                        />
                      </div>
                      <span className={style.country_name}>ENG</span>
                    </div>
                    <div className={style.card_match_score}>
                      <span>
                        146/6
                      </span>
                      <span  className={style.span_over}>
                        20.0 ov
                      </span>
                    </div>
                  </div>
                  <div className={style.carousel_card_score_team2}>
                  <div className={style.card_match_score}>
                      <span>
                        146/6
                      </span>
                      <span className={style.span_score}>
                        20.0 ov
                      </span>
                    </div>
                  <div className={style.card_flag_box}>
                      <div className={style.flag_img}>
                        <img
                          src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
                          alt="flag"
                        />
                      </div>
                      <span className={style.country_name}>ENG</span>
                    </div>
                  </div>
                </div>
                <div className={style.carousel_card_target}>Target 230</div>
                <div className={style.carousel_card_details}>
                  India need 27 runs in 13 balls.
                </div>
              </div>
              <div className={style.carousel_card} >
                 Live
                <div className={style.carousel_card_score}>
                  <div className={style.carousel_card_score_team1}>
                    <div className={style.card_flag_box}>
                      <div className={style.flag_img}>
                        <img
                          src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
                          alt="flag"
                        />
                      </div>
                      <span className={style.country_name}>ENG</span>
                    </div>
                    <div className={style.card_match_score}>
                      <span>
                        146/6
                      </span>
                      <span  className={style.span_over}>
                        20.0 ov
                      </span>
                    </div>
                  </div>
                  <div className={style.carousel_card_score_team2}>
                  <div className={style.card_match_score}>
                      <span>
                        146/6
                      </span>
                      <span className={style.span_score}>
                        20.0 ov
                      </span>
                    </div>
                  <div className={style.card_flag_box}>
                      <div className={style.flag_img}>
                        <img
                          src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
                          alt="flag"
                        />
                      </div>
                      <span className={style.country_name}>ENG</span>
                    </div>
                  </div>
                </div>
                <div className={style.carousel_card_target}>Target 230</div>
                <div className={style.carousel_card_details}>
                  India need 27 runs in 13 balls.
                </div>
              </div>
              <div className={style.carousel_card} >
                 Live
                <div className={style.carousel_card_score}>
                  <div className={style.carousel_card_score_team1}>
                    <div className={style.card_flag_box}>
                      <div className={style.flag_img}>
                        <img
                          src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
                          alt="flag"
                        />
                      </div>
                      <span className={style.country_name}>ENG</span>
                    </div>
                    <div className={style.card_match_score}>
                      <span>
                        146/6
                      </span>
                      <span  className={style.span_over}>
                        20.0 ov
                      </span>
                    </div>
                  </div>
                  <div className={style.carousel_card_score_team2}>
                  <div className={style.card_match_score}>
                      <span>
                        146/6
                      </span>
                      <span className={style.span_score}>
                        20.0 ov
                      </span>
                    </div>
                  <div className={style.card_flag_box}>
                      <div className={style.flag_img}>
                        <img
                          src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
                          alt="flag"
                        />
                      </div>
                      <span className={style.country_name}>ENG</span>
                    </div>
                  </div>
                </div>
                <div className={style.carousel_card_target}>Target 230</div>
                <div className={style.carousel_card_details}>
                  India need 27 runs in 13 balls.
                </div>
              </div>
              <div className={style.carousel_card} >
                 Live
                <div className={style.carousel_card_score}>
                  <div className={style.carousel_card_score_team1}>
                    <div className={style.card_flag_box}>
                      <div className={style.flag_img}>
                        <img
                          src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
                          alt="flag"
                        />
                      </div>
                      <span className={style.country_name}>ENG</span>
                    </div>
                    <div className={style.card_match_score}>
                      <span>
                        146/6
                      </span>
                      <span  className={style.span_over}>
                        20.0 ov
                      </span>
                    </div>
                  </div>
                  <div className={style.carousel_card_score_team2}>
                  <div className={style.card_match_score}>
                      <span>
                        146/6
                      </span>
                      <span className={style.span_score}>
                        20.0 ov
                      </span>
                    </div>
                  <div className={style.card_flag_box}>
                      <div className={style.flag_img}>
                        <img
                          src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
                          alt="flag"
                        />
                      </div>
                      <span className={style.country_name}>ENG</span>
                    </div>
                  </div>
                </div>
                <div className={style.carousel_card_target}>Target 230</div>
                <div className={style.carousel_card_details}>
                  India need 27 runs in 13 balls.
                </div>
              </div>
            
      </Carousel>
    </div>
  );
};
export default CarouselPage;

/*<div className={style.items_cards} key={index}>
              {data.lenght === 0 ? (
                <div className={style.loading}>Loading...</div>
              ) : (
                <>
                  <div className={style.match_status}>
                    <div>
                      <span
                        className={
                          match_status === "Live"
                            ? `${style.match_status_live}`
                            : `${style.match_status_other}`
                        }
                      >
                        {match_status}{" "}
                      </span>{" "}
                      <span  className={style.match_details}>{match_details}</span>
                    </div>
                    {dataItems.teams.map((team, index) => {
                      return (
                        <div className={style.team_name_score} key={index}>
                          <div className={style.team_name}>
                            {team.team_name}
                          </div>
                          <div className={style.team_score}>
                            <span>{team.overs || ""}</span>
                            {team.scores || ""}
                          </div>
                        </div>
                      );
                    })}
                    <div className={style.match_progress}>
                      Match Status : <span>{event_status}</span>
                    </div>
                    <p className={style.series_name}>Series : <span>{series_name}</span></p>
                  </div>
                </>
              )}
            </div>*/

// import React from "react";
// import style from "./carousel.module.scss";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const CarouselPage = () => {
//   const navigate = useNavigate()
//   function getShortCountryName(fullCountryName) {
//     // You can add more countries and their short forms as needed
//     const countryMap = {
//       'Afghanistan': 'AF',
//       'Australia': 'AU',
//       'Bangladesh': 'BD',
//       'England': 'ENG',
//       'India': 'IN',
//       'Ireland': 'IRE',
//       'New Zealand': 'NZ',
//       'Pakistan': 'PK',
//       'South Africa': 'SA',
//       'Sri Lanka': 'SL',
//       'West Indies': 'WI',
//       'Zimbabwe': 'ZIM',
//       'Netherlands': 'NED',
//       'Scotland': 'SCO',
//       'Nepal': 'NEP',
//       'Papua New Guinea': 'PNG',
//       'Canada': 'CAN',
//       'Kenya': 'KEN',
//       'UAE': 'UAE',
//       'Namibia': 'NAM',
//       'Hong Kong': 'HKG',
//       'Oman': 'OMA',
//       'United States': 'USA',
//       'Singapore': 'SGP',
//       'Bermuda': 'BER',
//       'Malaysia': 'MAS',
//       'Thailand': 'THA',
//       'Vanuatu': 'VAN',
//       'Boost Region': 'Boost',
//       'Sydney Thunder Women': 'Thunder',
//       'New South Wales': 'NSW',
//       'Pakistan Women': 'Pk_W',
//       'Bangladesh Women': 'Ban_W',
//       'Speen Ghar Region': 'Speen Ghar',
//       'Brisbane Heat Women': 'Brisbane Heat',
//       'Tasmania': 'TAS',
//       'Victoria': 'VIC',
//       'Western Australia': 'WA',
//       'South Australia': 'SA',
//       'Queensland': 'QLD',
//     };
//     // Use the map to get the short form, or return the full name if not found
//     return countryMap[fullCountryName] || fullCountryName;
//   }
//   // Define a function to map full country names to flag image URLs
// function getFlagImageUrl(fullCountryName) {
//   // Define the mapping of country names to flag image URLs
//   const flagImageMap = {
//     'India': 'https://demo.themeies.com/cricnotch/assets/images/flags/india.png',
//     'Australia': 'https://demo.themeies.com/cricnotch/assets/images/flags/australia.png',
//     'Pakistan': 'https://demo.themeies.com/cricnotch/assets/images/flags/pakistan.png',
//     'Pakistan Women': 'https://demo.themeies.com/cricnotch/assets/images/flags/pakistan.png',
//     'Bangladesh': 'https://demo.themeies.com/cricnotch/assets/images/flags/bangladesh.png',
//     'Afghanistan': 'https://demo.themeies.com/cricnotch/assets/images/flags/afghanistan.png',
//     'England': 'https://demo.themeies.com/cricnotch/assets/images/flags/england.png',
//     'Netherlands': 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313136.logo.png',
//     'New-zealand': 'https://demo.themeies.com/cricnotch/assets/images/flags/new-zealand.png',
//     'South-africa': 'https://demo.themeies.com/cricnotch/assets/images/flags/south-africa.png',
//     'Sri-lanka': 'https://demo.themeies.com/cricnotch/assets/images/flags/sri-lanka.png',
//     'Sydney Sixers Women': 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313500/313506.logo.png',
//     'Melbourne Renegades Women': 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313500/313508.logo.png',
//     'Melbourne Stars Women': 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313500/313504.logo.png',
//     'Adelaide Strikers Women': 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313500/313509.logo.png',

//     // Add more countries and their flag image URLs as needed
//   };

//   // Use the map to get the flag image URL, or a default URL if not found
//   return flagImageMap[fullCountryName] || ''; // Replace 'default-flag-url.png' with your default image URL.
// }
//   const data = useSelector((state) => state.getApidata.apiData);
//   // console.log(data);
//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 1550, min: 1024 },
//       items: 4,
//     },
//     desktop: {
//       breakpoint: { max: 1024, min: 800 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 800, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };
//   const navigatetosinglepage = (id) => {
//     navigate(`/LiveScoreSinglePage/${id}`)
//   } 
//   return (
//     <div className={style.Carousel}>
//       <Carousel
//         // swipeable={true}
//         //   draggable={false}
//           // showDots={true}
//         responsive={responsive}
        
//         //   ssr={true} // means to render carousel on server-side.
//         // infinite={true}
//         // autoPlay={true}
//         autoPlaySpeed={5000}
//           // keyBoardControl={true}
//           // customTransition="all .5"
//         //   transitionDuration={500}
//         //   containerClass="carousel-container"
        
//           removeArrowOnDeviceType={["tablet", "mobile","desktop","superLargeDesktop"]}
//         //   deviceType={this.props.deviceType}
//         //   dotListClass="custom-dot-list-style"
//         // itemClass="carousel-item-padding-40-px"
//       >
//         {/* {console.log(data)} */}
//         {data.map((dataItems, index) => {
//           const {
//             id,
//             match_status,
//             match_details,
//             series_name,
//             event_status,
//             start_date,
//             end_date,
//             location_name,
//             location_country,
//             match_url,
//             match_description,
//             teams,  
//           } = dataItems;
//           return (
//             <>
//               <div  className={style.carousel_card} onClick={()=>navigatetosinglepage(id)}>
//                 {/* {id} */}
//                 <div className={style.carousel_card_match_stats}>
//                   Live
//                 </div>
//                 <div className={style.carousel_card_location}>
//                   <p>{location_name}</p>
//                 </div>
//                 <div className={style.carousel_card_score}>
//                 {teams.map((team, teamIndex) => (
//                 <React.Fragment key={teamIndex}>
//                   <div
//                     className={
//                       teamIndex === 0
//                         ? style.carousel_card_score_team
//                         : style.carousel_card_score_team_reverse
//                     }
//                   >
//                     <div className={style.card_flag_box}>
//                       <div className={style.flag_img}>
//                         <img
//                           src={getFlagImageUrl(team.team_name)}
//                           alt=""
//                         />
//                       </div>
//                       <span className={style.country_name}>
//                         {console.log(team.team_name)}
//                       {getShortCountryName(team.team_name)}
//                       </span>
//                     </div>
//                     <div className={style.card_match_score}>
//                       <span>{team.scores}</span>
//                       <span className={style.span_over}>
//                         {team.overs ? (
//                           <span>{team.overs.split(" ")[0].split("/")[0]})</span>
//                         ) : (
//                           ""
//                         )}
//                       </span>
//                     </div>
//                   </div>
//                   {teamIndex === 0 ? (
//                     <div className={style.vs_div}>vs</div>
//                   ) : null}
//                 </React.Fragment>
//               ))}
//                   {/* <div className={style.carousel_card_score_team1}>
//                     <div className={style.card_flag_box}>
//                       <div className={style.flag_img}>
//                         <img
//                           src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
//                           alt="flag"
//                         />
//                       </div>
//                       <span className={style.country_name}>ENG</span>
//                     </div>
//                     <div className={style.card_match_score}>
//                       <span>
//                         146/6
//                       </span>
//                       <span  className={style.span_score}>
//                         20.0 ov
//                       </span>
//                     </div>
//                   </div>
//                   <div className={style.carousel_card_score_team2}>
//                   <div className={style.card_match_score}>
//                       <span>
//                         146/6
//                       </span>
//                       <span className={style.span_score}>
//                         20.0 ov
//                       </span>
//                     </div>
//                   <div className={style.card_flag_box}>
//                       <div className={style.flag_img}>
//                         <img
//                           src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
//                           alt="flag"
//                         />
//                       </div>
//                       <span className={style.country_name}>ENG</span>
//                     </div>
//                   </div> */}
//                 </div>
//                 <div className={style.carousel_card_target}>Target 230</div>
//                 <div className={style.carousel_card_details}>India need 27 runs in 13 balls.</div>
//               </div>
//             </>
//           );
//         })}
//       </Carousel>
//     </div>
//   );
// };
// export default CarouselPage;

// // this is the card code that will use the carousel with the data
// //  (<div className={style.carousel_card_score}>
// // {teams.map((team, teamIndex) => (
// //   <div
// //     className={style.carousel_card_score_team}
// //     key={teamIndex}
// //   >
// //     <div className={style.card_flag_box}>
// //       <div className={style.flag_img}>
// //         <img
// //           src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
// //           alt="flag"
// //         />
// //       </div>
// //       <span className={style.country_name}>{team.team_name}</span>
// //     </div>
// //     <div className={style.card_match_score}>
// //     <span>
// //       146/6
// //     </span>
// //     <span  className={style.span_over}>
// //       20.0 ov
// //     </span>
// //   </div>

// //   </div>
// // ))}
// // </div>)

// /*<div className={style.items_cards} key={index}>
//               {data.lenght === 0 ? (
//                 <div className={style.loading}>Loading...</div>
//               ) : (
//                 <>
//                   <div className={style.match_status}>
//                     <div>
//                       <span
//                         className={
//                           match_status === "Live"
//                             ? `${style.match_status_live}`
//                             : `${style.match_status_other}`
//                         }
//                       >
//                         {match_status}{" "}
//                       </span>{" "}
//                       <span  className={style.match_details}>{match_details}</span>
//                     </div>
//                     {dataItems.teams.map((team, index) => {
//                       return (
//                         <div className={style.team_name_score} key={index}>
//                           <div className={style.team_name}>
//                             {team.team_name}
//                           </div>
//                           <div className={style.team_score}>
//                             <span>{team.overs || ""}</span>
//                             {team.scores || ""}
//                           </div>
//                         </div>
//                       );
//                     })}
//                     <div className={style.match_progress}>
//                       Match Status : <span>{event_status}</span>
//                     </div>
//                     <p className={style.series_name}>Series : <span>{series_name}</span></p>
//                   </div>
//                 </>
//               )}
//             </div>*/
