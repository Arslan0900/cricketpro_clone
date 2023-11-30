// {console.log(data)}
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
//                   {match_status}
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
//         // })}