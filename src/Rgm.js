// @flow
import * as React from "react";
import { Map, Overlay, Marker } from "rgm";
import { css } from "@emotion/core";
import { useGoogleApiLoader } from "./dev-src/hooks";
//import { Ratio } from "./dev-src/controls";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
//import img "./images/2175304.jpg";

console.log("process.env.PUBLIC_URL", process.env.PUBLIC_URL);
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
//import { makeStyles } from "@material-ui/core/styles";
// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: "auto",
//   },
// });
// https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
const MAP_OPTIONS = {
  zoom: 14,
  center: {
    lat: 55.751244,
    lng: 37.618423,
  },
  gestureHandling: "greedy",
  clickableIcons: false,
  name: "cntr",
};
const markers = [
  {
    coords: {
      // координаты
      lat: 55.751244,
      lng: 37.618423,
    },
    name: "Чертолье — бывшее капище Рода ", // незвание
    description: "Особое место в славянской мифологии занимал..", // описание
    imgLink: "http:// ...", // ссылка на фотку
    audionLink: "http:// ...", // ссылка на аудио файл
  },
];
export default function Rgm() {
  const classes = useStyles();
  const onMarkerClick = (evt) => {
    console.log("sssssssss");
    toggleDrawer();
  };
  //const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (open) => {
    setOpen(!open);
  };
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const api = useGoogleApiLoader();
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
              <Marker lat={55.747347} lng={37.582135}>
                <CircleMarker name="Чертолье" onClick={onMarkerClick} />
              </Marker>
              <Marker lat={55.744471} lng={37.605168}>
                <CircleMarker name="cntr" onClick={onMarkerClick} />
              </Marker>
            </Overlay>
          </Map>
        )}
      </div>
      <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
        <div
          css={css`
            min-midth: 230px;
          `}
        >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="images/2175304.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Чертолье — бывшее капище Рода
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Особое место в славянской мифологии занимал Род – отец богов.
                  Капище этого бога считалось у древних славян чертой
                  разделяющей светлые высшие и нижние темные миры. В Москве –
                  это Чертолье, расположенное к западу от Кремля. Сегодня место
                  капища Рода очерчено Чертольскими улицами, Волхонкой, Сивцевым
                  Вражком и Власьевскими переулками. Вопреки популярной теории
                  название улиц Чертолья произошли вовсе не от черта, а от черты
                  отделяющей Навь и Явь. Навь — мир пращуров, предков, тех, кто
                  хранит традиции Рода и Явь — мир людей. Скорее всего, капище
                  находилось на дне оврага, по которому тёк ручей Черторый.
                  Сегодня — это место, где Сивцев Вражек пересекается с Большим
                  и Малым Власьевскими переулками.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Аудио
              </Button>
            </CardActions>
          </Card>
        </div>
      </Drawer>
    </>
  );
}

const CircleMarker = ({ name, onClick }) => (
  <div
    css={css`
      place-self: center center;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      background-color: white;
      border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
    onClick={onClick}
  >
    {name}
  </div>
);
