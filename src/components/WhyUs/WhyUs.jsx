import React, { useState } from "react";
import styles from './WhyUs.module.css';
import { getImageUrl } from "../../utils";

export const WhyUs =()=>{
    const [items, setItems] = useState([
        {id:1,icon: getImageUrl("icon/Icon.png"),title: "Nationwide Delivery",text: "We take pride in the quality of our products and ensure that every item meets our rigorous standards"},
        {id:2,icon: getImageUrl("icon/Icon.png"),title: "Customer-Centric Approach",text: "Your satisfaction is our top priority. We are here to assist you in finding the perfect surprise for your love"},
        {id:3,icon: getImageUrl("icon/Icon.png"),title: "Innovation",text: "We're constantly on the lookout for new and exciting gift ideas to keep your gifting experience fresh"},
        {id:4,icon: getImageUrl("icon/Icon.png"),title: "Personalization",text: "Many of our offerings can be personalized to add that extra touch of sentiment and uniqueness."},
      ]);
    return(
        <>
                                             <section className={styles.section3}>
                                  
                                  <h1>WHY CHOOSE US</h1>
                                  
                                    <div className={styles.container}>
                                       {items.map((item, index) => (
                           
                                          <div key={item.id}className={styles.containerItems}>
                                          <img src={item.icon} alt="image here"  />
                                          <h1>{item.title}</h1>
                                          <p>{item.text}</p>
                                        </div>
                                       ))}
                                        
                                    </div>
                               </section>
        </>
    )
}