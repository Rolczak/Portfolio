import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import reactLogo from './images/react.svg'
import typescriptLogo from './images/typescript.svg'
import netLogo from './images/net.svg'
import jQueryLogo from './images/jQuery.svg'
import mySqlLogo from './images/MySQL.svg'
import bootstrapLogo from './images/Bootstrap.svg'
import jenkinsLogo from './images/Jenkins.svg'
import muiLogo from './images/Mui.svg'
import rabbitLogo from './images/RabbitMQ.svg'

const useStyles = createUseStyles({
  "@keyframes shrink": {
    "0%, 50%": {
      maxHeight: 0,
      top: "-100%",
    },
    "75%, 100%": {
      maxHeight: 120,
      top: 0,
    },
  },
  "@keyframes grow": {
    "0%, 50%": {
      fontSize: 50,
      top: "0%",
    },
    "75%, 100%": {
      fontSize: 40,
      top: "65%",
    },
  },
  "@keyframes show": {
    "0%, 50%": {
      left: "100%",
    },
    "100%": {
      left: "30%",
    },
  },
  "@keyframes hide": {
    "0%, 50%": {
      left: "30%",
    },
    "100%": {
      left: "-100%",
    },
  },
  item: {
    position: "absolute",
    overflow: "hidden",
    height: "100%",
    width: "100%",
    display: "none",
    left: "30%",
    "& img": {
      position: "absolute",
      height: 90,
      top: 0,
      margin: 0,
      padding: 0,
    },
    "& span": {
      position: "absolute",
      top: "65%",
      fontSize: 40,
      lineHeight: 1,
      padding: 0,
    },
  },
  active: {
    "& img": {
      animation: "$shrink 2s",
    },
    "& span": {
      animation: "$grow 2s",
    },
    "&$item": {
      display: "block",
      animation: "$show 1s",
    },
  },
  hiding: {
    "&$item": {
      display: "block",
      left: "-100%",
      animation: "$hide 1s",
    },
  },
  wrapper: {
    height: 150,
    overflow: "hidden",
    position: "relative",
  },
});

interface CarouselItem {
  icon: string;
  name: string;
}

export function TechCarousel() {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);

  const items: CarouselItem[] = [
    { icon: netLogo, name: ".NET" },
    { icon: reactLogo, name: "React" },
    { icon: rabbitLogo, name: "RabbitMQ" },
    { icon: typescriptLogo, name: "Typescript" },
    { icon: mySqlLogo, name: "SQL" },
    { icon: jQueryLogo, name: "jQuery" },
    { icon: jenkinsLogo, name: "Jenkins" },
    { icon: bootstrapLogo, name: "Bootstrap" },
    { icon: muiLogo, name: "Material UI" },
  ];

  const getItemClass = (index: number): string => {
    if (index === current) {
      return classes.active;
    }
    var previousItem = current - 1;
    if (previousItem < 0) {
      previousItem = items.length - 1;
    }
    if (index === previousItem) {
      return classes.hiding;
    }
    return "";
  };

  useEffect(() => {
    let interval = setInterval(() => {
      console.log("Interval");
      let nextItemIndex = current + 1;
      if (nextItemIndex >= items.length) {
        nextItemIndex = 0;
      }
      setCurrent(nextItemIndex);
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <div className={classes.wrapper}>
      {items.map((value, index) => (
        <span
          className={`${classes.item} ${getItemClass(index)}`}
          key={value.name}
        >
          <img src={value.icon} alt={`${value.name} icon`} />
          <span>{value.name}</span>
        </span>
      ))}
    </div>
  );
}
