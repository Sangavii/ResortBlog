import Card from "./Card";
import Carousel from "./Carousel";
import Portfolio from "./Portfolio";
import { Fragment } from "react";
import Contact from "./Contact";
const Body = () => {
  return (
    <Fragment>
      <Carousel />
      <Portfolio />
      <Card />
      <div>
        <Contact />
      </div>
    </Fragment>
  );
};

export default Body;
