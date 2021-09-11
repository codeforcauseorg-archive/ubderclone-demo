import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { UserContext } from "../App";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: "300px",
    backgroundColor: "#000000",
    color: "#ffffff",
  },
  rootBelow: {
    width: "100%",
    minWidth: "300px",
    backgroundColor: "#ffffff",
    color: "#626262",
  },
  inline: {
    display: "inline",
  },
}));

export default function SideNavContent() {
  const classes = useStyles();
  const { user } = useContext(UserContext);
  const history = useHistory();

  const options = [
    {
      title: "Your Trips",
      location: "/trips",
    },
    {
      title: "Help",
      location: "/help",
    },
    {
      title: "Wallet",
      location: "/wallet",
    },
    {
      title: "Send a Gift",
      location: "/gift",
    },
    {
      title: "Settings",
      location: "/settings",
    },
  ];

  return (
    <Box>
      <List className={classes.root}>
        <ListItem
          alignItems="flex-start"
          button={true}
          onClick={() => history.push("/profile")}
        >
          <ListItemAvatar>
            <Avatar alt={user.displayName} src={user.photoURL} />
          </ListItemAvatar>
          <ListItemText
            primary={user.displayName}
            secondary={
              <Typography component="span" variant="body2">
                4.75
              </Typography>
            }
          />
        </ListItem>
        <Divider
          variant="middle"
          component="li"
          style={{
            backgroundColor: "#626262",
          }}
        />
        <ListItem alignItems="flex-start">
          <ListItemText primary="Messages" />
        </ListItem>
        <Divider
          variant="middle"
          component="li"
          light={true}
          style={{
            backgroundColor: "#626262",
          }}
        />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Do more with your account"
            secondary={
              <Typography
                component="span"
                variant="body2"
                style={{
                  color: "#a2a2a2",
                }}
              >
                Make money driving
              </Typography>
            }
          />
        </ListItem>
      </List>

      <List className={classes.rootBelow}>
        {options.map(function (option, index) {
          return (
            <ListItem
              key={index}
              alignItems="flex-start"
              button={true}
              onClick={function () {
                history.push(option.location);
              }}
            >
              <ListItemText primary={option.title} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
