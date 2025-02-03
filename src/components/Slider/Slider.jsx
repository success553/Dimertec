import React, { useState, useEffect } from 'react';
import { getImageUrl } from "../../utils";

export const Slider =()=> {
  const [active, setActive] = useState(3);
  const [items, setItems] = useState([
    { id: 1, text: 'Slide 1',image:getImageUrl("main/car_slide.png") },
    { id: 2, text: 'Slide 2',image:getImageUrl("main/car_slide.png") },
    { id: 3, text: 'Slide 3',image:getImageUrl("main/car_slide.png")},
    { id: 4, text: 'Slide 4',image:getImageUrl("main/car_slide.png") },
    { id: 5, text: 'Slide 5',image:getImageUrl("main/car_slide.png") },
    { id: 6, text: 'Slide 6',image:getImageUrl("main/car_slide.png") },
    { id: 7, text: 'Slide 7',image:getImageUrl("main/car_slide.png") },
  ]);

  useEffect(() => {
    loadShow();
    const intervalId = setInterval(() => {
      setActive(active + 1 < items.length ? active + 1 : 0);
    }, 6000); // slide every 5 seconds
    return () => clearInterval(intervalId);
  }, [active]);

  const loadShow = () => {
    const itemElements = document.querySelectorAll('.slider2 .item2');

    itemElements[active].style.transform = 'none';
    itemElements[active].style.zIndex = 1;
    itemElements[active].style.filter = 'none';
    itemElements[active].style.opacity = 1;

    itemElements[(active + 1) % items.length].style.transform = 'translateX(120px)';
    itemElements[(active + 1) % items.length].style.zIndex = 0;
    itemElements[(active + 1) % items.length].style.filter = 'none';
    itemElements[(active + 1) % items.length].style.opacity = 1;

    let stt = 0;
    for (let i = active + 2; i < items.length; i++) {
      stt++;
      itemElements[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-4deg)`;
      itemElements[i].style.zIndex = -stt;
      itemElements[i].style.filter = 'blur(5px)';
      itemElements[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
      stt++;
      itemElements[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(4deg)`;
      itemElements[i].style.zIndex = -stt;
      itemElements[i].style.filter = 'blur(5px)';
      itemElements[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
  };

  const handleNext = () => {
    setActive(active + 1 < items.length ? active + 1 : 0);
  };

  const handlePrev = () => {
    setActive(active - 1 >= 0 ? active - 1 : items.length - 1);
  };

  return (
    <div className="slider2">
      {items.map((item, index) => (
        <div key={item.id} className="item2">
            <img src={item.image}  alt="image not found"/>
        </div>
      ))}
      <button id="next" onClick={handleNext}>
        prev
      </button>
      <button id="prev" onClick={handlePrev}>
        next
      </button>
    </div>
  );
}


