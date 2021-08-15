import React, { useCallback, useEffect, useState } from "react";
import { Level } from "../../api/useData";
import { usePostLevels } from "../../api/usePostLevels";
import "./styles.scss";

export default function Levels(props: { levels: Level[] }): JSX.Element {
  const [values, setValues] = useState<number[]>([]);

  useEffect(() => {
    setValues(props.levels.sort((a, b) => a.id - b.id).map(({ requiredXp }) => requiredXp));
  }, [props.levels]);

  const deleteElement = useCallback((i: number) => {
    if (i < 0 || i >= values.length) return;
    setValues(values.filter((value, index) => index !== i));
  }, [values, setValues]);

  const changeElement = useCallback((i: number, valueNew: number) => {
    if (i < 0 || i >= values.length || valueNew < 0) return;
    const valueBefore = values[i - 1];
    if (valueBefore != null && valueBefore >= valueNew) return;
    const valueCurrent = values[i];
    const diff = valueNew - valueCurrent;
    setValues(values.map((value, index) => i <= index ? value + diff : value));
  }, [values, setValues]);

  const { loading, error, post } = usePostLevels();

  return (
    <div className="levels-page">
      <h2>Levels</h2>
      {values.map((requiredXp, index) => (
        <div className="level-container" key={index}>
          <div className="level-index">{index + 1}</div>
          <div className="level-xp">
            <input type="number" value={requiredXp} onChange={(evt) => changeElement(index, parseInt(evt.target.value, 10))} />
          </div>
          <div className="level-delete">
            <button onClick={() => deleteElement(index)}>Löschen</button>
          </div>
        </div>
      ))}
      <button className="level-add" onClick={() => setValues([...values, values[values.length - 1] + 1])}>Neues Level</button>
      <br />
      <button className="levels-save" onClick={() => post(values.map((value, index) => ({ id: index + 1, requiredXp: value })))}>Speichern</button>
      {loading && <>loading...</>}
      {error && <>Error: {JSON.stringify(error)}</>}
    </div>
  );
}