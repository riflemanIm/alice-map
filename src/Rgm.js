// @flow
import * as React from "react";
import { Map, Overlay, Marker } from "rgm";
import { css } from "@emotion/core";
import { useGoogleApiLoader } from "./dev-src/hooks";
//import { Ratio } from "./dev-src/controls";

// https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
const MAP_OPTIONS = {
  zoom: 9,
  center: {
    lat: 59.936,
    lng: 30.314,
  },
  gestureHandling: "greedy",
  clickableIcons: false,
};

export default function Rgm() {
  const api = useGoogleApiLoader();
  return (
    <div style={{ height: 600, width: 1000 }}>
      {api && (
        <Map api={api} options={MAP_OPTIONS}>
          <Overlay>
            <Marker lat={MAP_OPTIONS.center.lat} lng={MAP_OPTIONS.center.lng}>
              <CircleMarker />
            </Marker>
          </Overlay>
        </Map>
      )}
    </div>
  );
}
const CircleMarker = () => (
  <div
    css={css`
      place-self: center center;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      background-color: white;
      border: 3px solid red;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    RGM
  </div>
);
