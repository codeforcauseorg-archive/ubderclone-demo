import { useState } from "react";
import MainAppBar from "../components/MainAppBar";

export default function MainLayout({ children }) {

  let [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <MainAppBar setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen}/>
      {children}
 
    </div>
  );
}
