import React from "react";

const Entry = (props) => {
  return (
    <dl className="dl-container">
      <div className="card">
        <dt className="emoji">{props.emoji}</dt>
        <dt>{props.name}</dt>
        <dd>{props.meaning}</dd>
      </div>
    </dl>
  );
};

export default Entry;
