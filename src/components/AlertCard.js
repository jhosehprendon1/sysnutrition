
import React from "react";

const AlertCard = (props) => {
  return (
    <div className="warn-alert">
      <h3 className="error-alert-title-content">{props.title}</h3>
      <p>{props.content}</p>
      <p>{props.subContent}</p>
      <p>{props.extraInfo}</p>
    </div>
  )
};

export default AlertCard;