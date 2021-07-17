import React from "react";
import { Data } from "../api/useData";
import "./GameHeader.css";

export default function GameHeader(props: { data: Data }): JSX.Element {
  return (
    <div className="gameHeader">
      <div className="gameHeaderTitle">{props.data.gameTitle}</div>
      <div className="gameHeaderPoints">
        {props.data.totalReachedPoints} / {props.data.totalMaxPoints} Punkte
      </div>
      <div className="gameHeaderQuests">{props.data.totalClosed} / {props.data.totalChallenges} Quests</div>
    </div>
  );
}
