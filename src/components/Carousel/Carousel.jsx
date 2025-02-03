import React, { useState, useEffect } from 'react';
import { getImageUrl } from "../../utils"
export const Carousel =() => {
  const [active, setActive] = useState(1);
  const [items, setItems] = useState([
    { id: 1, text: 'TVS',image : getImageUrl("nav/product2.png") },
    { id: 2, text: 'Baja Model 3',image : getImageUrl("nav/product1.png") },
    { id: 3, text: 'TVS 3' ,image : getImageUrl("nav/product2.png") },
    { id: 4, text: 'Baja Model 3',image : getImageUrl("nav/product1.png")  },
    { id: 5, text: 'TVS 5' ,image : getImageUrl("nav/product2.png") },
    { id: 6, text: 'Baja Model 3',image : getImageUrl("nav/product1.png") },
    { id: 7, text: 'TVS 7',image : getImageUrl("nav/product2.png")  },
    { id: 8, text: 'Baja Model 3',image : getImageUrl("nav/product1.png")  },
  ]);

  useEffect(() => {
    loadShow();
    const intervalId = setInterval(() => {
      setActive(active + 1 < items.length ? active + 1 : 0);
    }, 5000); // slide every 5 seconds
    return () => clearInterval(intervalId);
  }, [active]);

  const loadShow = () => {
    const itemElements = document.querySelectorAll('.slider .item');

  itemElements[active].style.transform = 'none';
  itemElements[active].style.zIndex = 1;
  itemElements[active].style.filter = 'none';
  itemElements[active].style.opacity = 1;

  // Show the next item
  itemElements[(active + 1) % items.length].style.transform = 'translateX(600px)';
  itemElements[(active + 1) % items.length].style.zIndex = 0;
  itemElements[(active + 1) % items.length].style.filter = 'blur(2px)';
  itemElements[(active + 1) % items.length].style.opacity = 0.5;

  let stt = 0;
  for (let i = active + 2; i < items.length; i++) {
    stt++;
    itemElements[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
    itemElements[i].style.zIndex = -stt;
    itemElements[i].style.filter = 'blur(5px)';
    itemElements[i].style.opacity = stt > 2 ? 0 : 0.6;
  }

  stt = 0;
  for (let i = active - 1; i >= 0; i--) {
    stt++;
    itemElements[i].style.transform = `translateX(${-20 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
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
    <div className="slider">
      {items.map((item, index) => (
        <div key={item.id} className="item">
          <h1 className="productName">{item.text}</h1>

             <div className="carouselItemDetails">
                           <div className="image">
                                   <img src={item.image} alt="image"  />
                                </div>
                                <div className="productDetails">
                                    <table>
                                         <tbody>
                                             <tr>
                                                <td>Model Year:</td>
                                                <th>2024</th>
                                             </tr>
                                             <tr>
                                                <td>Model:</td>
                                                <th>S30</th>
                                             </tr>
                                             <tr>
                                                <td>Fuel:</td>
                                                <th>NG3000</th>
                                             </tr>


                                         </tbody>
                                    </table>
                                   
                                    <div className="price">
                                                    NG 350,000
                                    </div>
                                    <button className="orderBtn">Order now</button>
                                </div>
             </div>
        
        </div>
        
      ))}

      <button id="next" onClick={handlePrev}>
        prev
      </button>
      <button id="prev"  onClick={handleNext}>
        next
      </button>
    </div>
  );
}

