import {
  Avatar,
  Box,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import { UserContext } from "../App";

export default function Profile() {
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
      <Divider variant="middle"></Divider>
      <Box
        style={{
          margin: "16px",
        }}
      >
        <Typography className={classes.title} variant="body2">
          First Name
        </Typography>
        <Typography variant="body1">{user.displayName}</Typography>
      </Box>

      <Box
        style={{
          margin: "16px",
        }}
      >
        <Typography className={classes.title} variant="body2">
          Email
        </Typography>
        <Typography variant="body1">{user.email}</Typography>
      </Box>

      <Box
        style={{
          margin: "16px",
        }}
      >
        <Typography className={classes.title} variant="body2">
          Password
        </Typography>
        <Typography variant="body1">*********</Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        style={{
          margin: "16px",
        }}
      >
        <Typography className={classes.social} variant="body1">
          Add Google Account
        </Typography>

        <Typography className={classes.social} variant="body1">
          Add Facebook Account
        </Typography>
      </Box>
    </Box>
  );
}
