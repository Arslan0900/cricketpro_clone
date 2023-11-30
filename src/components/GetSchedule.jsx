import React from "react";
import style from "./css/getSchedule.module.scss";
import { Link } from "react-router-dom";

const GetSchedule = ({ data }) => {
  return (
    <div>
      {data.map((outerData) => {
        return (
          <div key={outerData.id} className={style.Scadual_card}>
            <div className={style.card}>
              <h1>
                {outerData.teams.map((team, index) => {
                  return (
                    <span key={index}>
                      {team.team_name}
                      {index !== outerData.teams.length - 1 && " vs "}
                    </span>
                  );
                })}
              </h1>
              <div>
                {outerData.teams.map((team, index) => {
                  return (
                    <h4 key={index}>
                      {team.team_name} - {team.scores || "in progress"}, {team.overs || ""}
                    </h4>
                  );
                })}
              </div>
              <div>
                {/* {outerData.t1img !== undefined && outerData.t2img !== undefined ? (
                  <div>
                    <img src={outerData.t1img} alt="" />
                    <span style={{ fontSize: 30 }}> vs </span>
                    <img src={outerData.t2img} alt="" />
                  </div>
                ) : (
                  ""
                )} */}
              </div>
              <p>{outerData.series}</p>
              <p>{outerData.eventStatus}</p>
              <p>{outerData.match_status}</p>
              <p>{outerData.match_details}</p>
              <br />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GetSchedule;
