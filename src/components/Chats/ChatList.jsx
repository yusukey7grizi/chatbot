import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Chat from "./Chat";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    height: "375px",
    padding: "0",
    overflow: "auto",
  },
  inline: {
    display: "inline",
  },
}));
const ChatList = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.root} id={"scroll-area"}>
      {props.Chats.map((chat, index) => (
        <Chat key={index.toString()} text={chat.text} type={chat.type}></Chat>
      ))}
    </List>
  );
};

export default ChatList;
