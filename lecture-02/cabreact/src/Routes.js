import { BrowserRouter as Switch, Route } from "react-router-dom";
import AuthGaurd from "./gaurds/AuthGaurd";
import MainLayout from "./layouts/MainLayout";
import PassiveLayout from "./layouts/PassiveLayout";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <AuthGaurd>
          <MainLayout>
            <Home />
          </MainLayout>
        </AuthGaurd>
      </Route>

      <Route path="/settings" exact>
        <AuthGaurd>
          <PassiveLayout title={"Settings"}>
            <Settings />
          </PassiveLayout>
        </AuthGaurd>
      </Route>

      <Route path="/trips" exact>
        <AuthGaurd>
          <PassiveLayout title={"Your Trips"}>
            <Settings />
          </PassiveLayout>
        </AuthGaurd>
      </Route>

      <Route path="/help" exact>
        <AuthGaurd>
          <PassiveLayout title={"Help"}>
            <Help />
          </PassiveLayout>
        </AuthGaurd>
      </Route>

      <Route path="/wallet" exact>
        <AuthGaurd>
          <PassiveLayout title={"Wallets"}>
            <Settings />
          </PassiveLayout>
        </AuthGaurd>
      </Route>

      <Route path="/gift" exact>
        <AuthGaurd>
          <PassiveLayout title={"Gifts"}>
            <Settings />
          </PassiveLayout>
        </AuthGaurd>
      </Route>

      <Route path="/profile" exact>
        <AuthGaurd>
          <PassiveLayout title={"Edit Profile"}>
            <Profile />
          </PassiveLayout>
        </AuthGaurd>
      </Route>

      <Route path="/login" exact>
        <Login />
      </Route>
    </Switch>
  );
}
