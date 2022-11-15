import "../styles/Carousel.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import logo from "../image/SV.png";
const VideoCarousel = () => {
  const videoProperties = [
    {
      id: 1,
      title: "Entrance",
      src: "https://youtu.be/KmQiv8klLAg",

      credit: "View our Spectacular Entrance"
    },
    {
      id: 2,
      title: "Rooms",
      src: "https://youtu.be/EEJFMdfraVY",
      credit: "Highly Deluxed Rooms"
    },
    {
      id: 3,
      title: "Pexels",
      src: "https://youtu.be/KmQiv8klLAg",
      credit: "Video by cottonbro from Pexels"
    }
  ];

  return (
    <div className="App">
      <Carousel>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                url={videoObj.src}
                pip={true}
                controls={true}
                playing={true}
              />
              <Carousel.Caption>
                <h3>{videoObj.title}</h3>
                <p>{videoObj.credit}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
