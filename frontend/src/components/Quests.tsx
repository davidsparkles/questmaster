import React, { useState } from "react";
import { Quest } from "../api/useData";
import "./Quests.css";

export default function Quests(props: { quests: Quest[] }): JSX.Element {
  const [filterList, setFilterList] = useState<boolean>(false);

  return (
    <div className="questList">
      <div className="questFilter">
        <input type="checkbox" checked={filterList} onChange={(evt) => setFilterList(evt.target.checked)} />Erledigte Quests verbergen
      </div>
      {props.quests
        .filter(({ state }) => filterList === true ? state !== "closed" : true)
        .map((quest, index) => (
          <div key={index} className={`questBox ${quest.state}`}>
            <div className="questHeader">
              <div className="questTitle">{quest.title ?? "🔒 ???"}</div>
              <div className="questPoints">
                {
                  quest.state !== "closed" ? quest.maxXp : `${quest.reachedXp} / ${quest.maxXp}`
                } XP
              </div>
            </div>
            {
              quest.state !== "hidden" && <div className="questDescription">{formatDescription(quest.description ?? "???")}</div>
            }
            {
              quest.state === "hidden" && <div className="questDescription">Ab Level {quest.minLevel}</div>
            }
          </div>
      ))}
    </div>
  );
}

function formatDescription(description?: string): string {
  if (description == null) return "???";
  if (description.length < 100) return description;
  return description.substring(0, 96) + " ...";
}
