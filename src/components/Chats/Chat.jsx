import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Image from "./20210111_132214 (1).jpg";
import "../../assets/styles/style.css";
const Chat = (props) => {
  const isQuestion = props.type === "question" ? true : false;
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";
  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="Remy Sharp" src={Image} />
        ) : (
          <Avatar
            alt="Remy Sharp"
            src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-21.jpg"
          />
        )}
      </ListItemAvatar>
      <div className="p-chat__bubble">{props.text}</div>
    </ListItem>
  );
};

export default Chat;
