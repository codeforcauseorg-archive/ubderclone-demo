import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { useContext } from "react";
import { UserContext } from "../App";
import { useSnackbar } from 'notistack';

export default function Help() {
  const { enqueueSnackbar } = useSnackbar();
  const helpOptions = [
    {
      title: "All topics",
      location: "/help/topics",
    },
    {
      title: "Trip Issues and Refunds",
      location: "/help/refunds",
    },
    {
      title: "Account and Payment Options",
      location: "/help/payment",
    },
    {
      title: "Uber Commute",
      location: "/help/commute",
    },
    {
      title: "More",
      location: "/help/more",
    },
    {
      title: "A Guide to Uber",
      location: "/help/guide",
    },
    {
      title: "Accessibility",
      location: "/help/acc",
    },
  ];

  const bottomOptions = [
    {
      title: "Support Message",
      location: "/help/message",
    },
    {
      title: "View Archive",
      location: "/help/archive",
    }
  ];


  const useStyles = makeStyles((theme) => ({
    title: {
      color: "#a6a6a6",
      marginBottom: "8px",
    },

    social: {
      margin: "8px 0px",
    },

    icon: {
      marginRight: "8px",
    },
  }));

  const { user } = useContext(UserContext);
  let classes = useStyles();
  return (
    <Box display="flex" flexDirection="column">
      <Avatar
        src={user.photoURL}
        style={{
          margin: "16px",
          width: "100px",
          height: "100px",
        }}
      />
      <Divider variant="fullWidth"></Divider>

      <List className={classes.rootBelow}>
        {helpOptions.map(function (option, index) {
          return (
            <ListItem
              key={index}
              alignItems="flex-start"
              button={true}
              onClick={function () {
                // history.push(option.location);
                enqueueSnackbar(`${option.title} | Operation not yet available `);

              }}
            >
              <ListItemText primary={option.title} />
            </ListItem>
          );
        })}
      </List>

      <Divider variant="fullWidth"></Divider>

      <List className={classes.rootBelow}>
        {bottomOptions.map(function (option, index) {
          return (
            <ListItem
              key={index}
              alignItems="flex-start"
              button={true}
              onClick={function () {
                // history.push(option.location);
                enqueueSnackbar(`${option.title} | Operation not yet available `);
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
