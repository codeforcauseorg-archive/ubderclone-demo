import PassiveAppBar from "../components/PassiveAppBar";
import { Helmet } from "react-helmet";

export default function PassiveLayout({ title, children }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <PassiveAppBar title={title}/>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
}
