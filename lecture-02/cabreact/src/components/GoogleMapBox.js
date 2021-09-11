import React from "react";
import GoogleMapReact from "google-map-react";
import { Card } from "@material-ui/core";

export default function SimpleMap() {
  let props = {
    center: {
      lat: 12.971599,
      lng: 77.594566,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <Card style={{ height: "200px", flexGrow: 1, margin: "16px", borderRadius: "0px"}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "", language: "en" }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        options={{
          draggable: false,
          clickableIcons: false,
          fullscreenControl: false,
          zoomControl: false,
        }}
      />
    </Card>
  );
}
