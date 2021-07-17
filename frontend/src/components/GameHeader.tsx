import React from "react";
import { Data } from "../api/useData";
import "./GameHeader.css";

export default function GameHeader(props: { data: Data }): JSX.Element {
  return (
    <div className="gameHeader">
      <div className="gameHeaderTitle">{props.data.gameTitle}</div>
      <div className="gameHeaderLevel">
        Level {props.data.currentLevel} / {props.data.maxLevel}
      </div>
      <Progress current={props.data.xpWithinCurrentLevel} max={props.data.xpToNextLevel + props.data.xpWithinCurrentLevel} />
    </div>
  );
}

function Progress(props: { max: number; current: number }): JSX.Element {
  const ratio = 100 * props.current / props.max;

  return (
    <div className="gameProgressContainer">
      <div className="gameProgressBar">
        <div style={{ width: `${ratio}%` }} className="gameProgressCurrent">{props.current}</div>
      </div>
      {props.max}↑
    </div>
  )
}
