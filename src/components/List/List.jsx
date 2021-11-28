import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "../ListItem/ListItem";
import "./List.scss";

export default function List() {
  const listItemNo = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
  console.log(clickLimit);
  const listRef = useRef();
  const rightCondition = slideNumber + Math.floor(clickLimit) + 1;
  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    console.log(distance);

    console.log("Right", rightCondition);
    if (direction === "right" && rightCondition !== listItemNo.length + 1) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <h1> {listItemNo.length}</h1>
      <span className="listTitle">List title</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          {listItemNo.map((item, index) => (
            <ListItem
              key={index}
              itemNo={index}
              lastItem={index === slideNumber + Math.floor(clickLimit)}
            />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
