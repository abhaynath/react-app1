import React, { useState } from "react";
import { API_PlayerList } from "../../helpers/api-calls";
import { getId } from "../../helpers/common";
import "./style.css";

export const Card = () => {
  const [playerList, setPlayerList] = useState([]);
  const getPlayerList = async () => {
    let data = await API_PlayerList();
    console.log("--data--", data.data);
    setPlayerList(data.data);
  };

  return (
    <div className="card">
      <div className="title">My Favourite Players</div>

      <div className="btns">
        <button onClick={getPlayerList}>Get Players List</button>
      </div>
      <div className="playerList">
        {playerList.map((player: any) => {
          return (
            <div className="player" key={getId()}>
              <div className="name">{player.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
