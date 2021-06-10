import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Slider.css";

function Slider() {
  const baseUrl = "http://react-responsive-carousel.js.org/assets/";
  const datas = [
    {
      id: 1,
      image: `${baseUrl}1.jpeg`,
      title: "La premiere image",
      text: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
    },
    {
      id: 2,
      image: `${baseUrl}2.jpeg`,
      title: "La deuxieme image",
      text: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
    },
    {
      id: 3,
      image: `${baseUrl}3.jpeg`,
      title: "La troisème image",
      text: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
    },
  ];
  return (
    <Carousel
      autoPlay
      interval={6000}
      // infiniteLoop
      thumbWidth={120}
      showIndicators={false}
      showStatus={true}
    >
      {datas.map((slide) => (
        <div key={slide.id}>
          <img src={slide.image} alt="" />
          <div className="overlay">
            <h2 className="overlay__title">{slide.title}</h2>
            <p className="overlay_text">{slide.text}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Slider;
