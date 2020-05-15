// @flow
import * as React from "react";
import { Map, Overlay, Marker } from "rgm";
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
import data from "./data";

console.log("data", data);
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

export default function Rgm() {
  const classes = useStyles();
  const api = useGoogleApiLoader();
  const onMarkerClick = (evt, inx) => {
    console.log("evt", evt, inx);
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
            <Overlay>
              {data.map((item, inx) => (
                <Marker lat={item.coords.lat} lng={item.coords.lng} key={inx}>
                  <CircleMarker
                    name={item.name}
                    onClick={(e) => onMarkerClick(e, inx)}
                    acitive={state.name === item.name}
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
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={handleDrawerClose}>
                Закрыть
              </Button>
            </CardActions>
          </Card>
        </div>
      </Drawer>
    </>
  );
}

const CircleMarker = ({ name, onClick, acitive }) => (
  <div
    css={css`
      place-self: center center;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      background-color: #d9d6d9;
      background-size: contain;
      background-image: url(images/ico${acitive ? "_mono" : ""}.svg);
      background-position: center bottom;
      background-repeat: no-repeat;
      border: ${acitive ? 3 : 2}px solid #000;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: ${acitive ? 1 : 0.8};
      ${acitive
        ? "box-shadow: 24px 28px 25px 0px rgba(128, 128, 128, 0.54);"
        : ""}
    `}
    onClick={onClick}
  />
);
