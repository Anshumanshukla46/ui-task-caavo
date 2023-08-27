import React from "react";
import "./User.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const User = ({ name, image, id, isSelected, onClick }) => {
  return (
    <div className="user_container">
      <div key={id} className="user_main" onClick={onClick}>
        {isSelected && (
          <CheckCircleIcon
            className="user_select"
            color="primary"
            fontSize="large"
          />
        )}
        <img src={image} alt="" />

        <span className="user_name">{name}</span>
      </div>
    </div>
  );
};

export default React.memo(User);