import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useHistory } from "react-router";
import { IconButton, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#000000",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function PassiveAppBar({title}) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Toolbar
        style={{
          backgroundColor: "#000000",
        }}
      >
        <IconButton
          edge="start"
          className={classes.menuButton}
          aria-label="menu"
          onClick={history.goBack}
        >
          <KeyboardBackspaceIcon style={{
              color:"#ffffff"
          }}/>
        </IconButton>
        <Typography variant="h5" style={{
          color : "#ffffff"
        }}>{title}</Typography>
      </Toolbar>
    </div>
  );
}
