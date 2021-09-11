import { Box } from "@material-ui/core";
import firebase from "../utils/firebase";

export default function Settings() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <h1>Settings Page</h1>
      <button
        onClick={function () {
          firebase.auth().signOut();
        }}
      >
        Sign Out
      </button>
    </Box>
  );
}
