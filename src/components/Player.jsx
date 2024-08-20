import React, { useState } from "react";

function Player(props) {
  const [playerName, setPlayerName] = useState(props.player);
  const [isEditing, setIsEditing] = useState(false);

  function handleClickEdit() {
    //console.log("clicked");
    setIsEditing((editing) => !editing);
    if (isEditing) {
      props.onPlayerChange(props.playerSymbol, playerName);
    }
  }

  function handleOnChange(event) {
    console.log(event.target.value);
    setPlayerName(event.target.value);
  }

  return (
    <>
      <li className={props.isActive ? "active" : undefined}>
        <span className="player">
          {isEditing ? (
            <input
              type="text"
              required
              value={playerName}
              onChange={handleOnChange}
            />
          ) : (
            <span className="player-name">{playerName}</span>
          )}
          <span className="player-symbol">{props.playerSymbol}</span>
        </span>
        <button onClick={handleClickEdit}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}

export default Player;
