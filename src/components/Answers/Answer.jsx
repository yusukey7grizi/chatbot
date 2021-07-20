import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    padding: "2px",
  },
  button: {
    backgroundColor: "skyblue",
    width: "100%",
    color: "black",
  },
}));
const Answer = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.buttonWrapper}>
      <Button
        onClick={() => props.select(props.nextId, props.content)}
        className={classes.button}
      >
        {props.content}
      </Button>
    </div>
  );
};

export default Answer;
