import { Box } from "@material-ui/core";
import { useContext } from "react";
import { Redirect } from "react-router";
import { UserContext } from "../App";

export default function AuthGaurd({ children }) {
  let { user } = useContext(UserContext);

  if (user === undefined) {
    return <Box display="flex" alignItems="center" justifyContent="center" width="100vw" height="100vh">
      <img alt="uber" src="./uber.png" height="80px"></img>
    </Box>;
  } else if (user === null) {
    return <Redirect to="/login" />;
  } else {
    return children;
  }
}
