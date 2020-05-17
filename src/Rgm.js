// @flow
import * as React from "react";
import { Map, Overlay, Marker, useMap } from "rgm";
import { css } from "@emotion/core";
import { useGoogleApiLoader } from "./dev-src/hooks";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import ReactAudioPlayer from "react-audio-player";
import data from "./data";
import geoJSON from "./geoJson";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 420,
  },
});

const MAP_OPTIONS = {
  zoom: 15,
  center: {
    lat: 55.751244,
    lng: 37.618423,
  },
  gestureHandling: "greedy",
  clickableIcons: false,
  name: "cntr",
};
const BG_STYLE = {
  fillColor: "transparent",
  strokeColor: "white",
  strokeWeight: 6,
  strokeOpacity: 1,
  cursor: "hand",
};
const lineSymbol = {
  path: "M 0,-1 0,1",
  strokeOpacity: 1,
  scale: 4,
};
const FG_STYLE = {
  fillColor: "transparent",
  strokeColor: "#666f63",
  strokeWeight: 2,

  cursor: "hand",
  strokeOpacity: 0,
  icons: [
    {
      icon: lineSymbol,
      offset: "0",
      repeat: "20px",
    },
  ],
};
const GeoJson = ({ children }) => {
  const { map } = useMap();
  React.useEffect(() => {
    let style = BG_STYLE;
    // To prevent style blink we override style inside addListener
    const addFeatureListener = map.data.addListener("addfeature", (event) => {
      map.data.overrideStyle(event.feature, style);
    });
    const features = [];
    // Add background white shaped border for better visibility
    features.push(...map.data.addGeoJson(children));
    // Add foreground  thinner border with primary color
    style = FG_STYLE;
    features.push(...map.data.addGeoJson(children));
    addFeatureListener.remove();
    return () => {
      features.forEach((feature) => map.data.remove(feature));
    };
  }, [map, children]);
  return null;
};

export default function Rgm() {
  const classes = useStyles();
  const api = useGoogleApiLoader();
  const onMarkerClick = (evt, inx) => {
    toggleDrawer(data[inx]);
  };
  const [state, setOpen] = React.useState({});

  const toggleDrawer = (newState) => {
    setOpen({ ...newState, open: !state.open });
  };

  const handleDrawerClose = () => {
    setOpen({ ...state, open: false });
  };

  React.useEffect(() => {
    setOpen({ ...data[0], open: false });
  }, []);

  return (
    <>
      <div
        css={css`
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          overflow: hidden;
        `}
      >
        {api && (
          <Map api={api} options={MAP_OPTIONS}>
            <GeoJson>{geoJSON}</GeoJson>
            <Overlay>
              {data.map((item, inx) => (
                <Marker lat={item.coords.lat} lng={item.coords.lng} key={inx}>
                  <CircleMarker
                    name={item.name}
                    onClick={(e) => onMarkerClick(e, inx)}
                    active={state.name === item.name}
                  />
                </Marker>
              ))}
            </Overlay>
          </Map>
        )}
      </div>
      <Drawer anchor="right" open={state.open} onClose={handleDrawerClose}>
        <div
          css={css`
            min-midth: 230px;
          `}
        >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={state.imgLink}
                title={state.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {state.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {state.description}
                </Typography>
              </CardContent>
              <CardContent>
                <a
                  component="button"
                  href="./presentation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  скачать презентацию (.pdf)
                </a>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <ReactAudioPlayer
                src="https://drive.google.com/uc?id=1ga4ck8DKZmF-iTU8WcmaiMDDRCxDFL9w&export=download"
                controls
              />
            </CardActions>
            <CardActions>
              <ReactAudioPlayer
                src="https://drive.google.com/uc?id=1f5HDU9IL2rTlwSGoojyQBWax05ylOIeG&export=download"
                controls
              />
            </CardActions>
            <CardActions>
              <ReactAudioPlayer
                src="https://drive.google.com/uc?id=11d8hwoBjpIZACq0NKiGRXqn4E7c5oFlt&export=download"
                controls
              />
            </CardActions>
            <CardActions>
              <ReactAudioPlayer
                src="https://drive.google.com/uc?id=1LgzOBGhoZWciGHC6q7LTC-5mBiqIlHL-&export=download"
                controls
              />
            </CardActions>
            <CardActions>
              <ReactAudioPlayer
                src="https://drive.google.com/uc?id=1v4IdecUo-xlSMY3HwdH5BzNyIn2_CehO&export=download"
                controls
              />
            </CardActions>
            <CardActions>
              <ReactAudioPlayer
                src="https://drive.google.com/uc?id=1X6Mk7V0twiUKlhUWRJKTwKXYYapPI-Kj&export=download"
                controls
              />
            </CardActions>
            <CardActions>
              <ReactAudioPlayer
                src="https://drive.google.com/uc?id=1mLTZHOiACp49fbh4XbYAF3bt47KcjWMF&export=download"
                controls
              />
            </CardActions>
            <CardActions>
              <ReactAudioPlayer
                src="https://drive.google.com/uc?id=1B6ct04EjP3Gd0eMLGt_456S_6U1Sj0TL&export=download"
                controls
              />
            </CardActions>

            <CardActions
              css={css`
                margin-top: 24px;
              `}
            >
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={handleDrawerClose}
              >
                Закрыть
              </Button>
            </CardActions>
          </Card>
        </div>
      </Drawer>
    </>
  );
}

const CircleMarker = ({ name, onClick, active }) => (
  <div
    css={css`
      place-self: center center;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      background-color: #d9d6d9;
      background-size: contain;
      background-image: url(images/ico${active ? "_mono" : ""}.svg);
      background-position: center bottom;
      background-repeat: no-repeat;
      border: ${active ? 3 : 2}px solid #${active ? "393939" : "4e4e4e"};
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: ${active ? 1 : 0.8};
      ${active
        ? "box-shadow: 24px 28px 25px 0px rgba(128, 128, 128, 0.54);"
        : ""}
    `}
    onClick={onClick}
  />
);
