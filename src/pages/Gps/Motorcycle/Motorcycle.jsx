import React, { useState } from "react";
import styles from './Motorcycle.module.css';
import { getImageUrl } from "../../../utils";

export const Motorcycle =()=>{
     const  [items, setItems] = useState([
                { id: 1, text: 'Slide 1',image:getImageUrl("main/gpstracker (2).jpg") },
                { id: 2, text: 'Slide 2',image:getImageUrl("main/gpstracker (1).jpg") },
                { id: 3, text: 'Slide 3',image:getImageUrl("main/gpstracker (3).jpg")},
                { id: 4, text: 'Slide 4',image:getImageUrl("main/gpstracker (4).jpg") },
                { id: 5, text: 'Slide 5',image:getImageUrl("main/gpstracker (7).jpg") },
                { id: 6, text: 'Slide 6',image:getImageUrl("main/gpstracker (2).jpg") },
                { id: 7, text: 'Slide 7',image:getImageUrl("main/gpstracker (3).jpg") },
                { id: 8, text: 'Slide 6',image:getImageUrl("main/gpstracker (1).jpg") },
                { id: 9, text: 'Slide 6',image:getImageUrl("main/gpstracker (4).jpg") },
             
    
        ]);
    return(
       <>
           <section className={styles.section}>
                                  <h1  className={styles.categoryTitle}>Motorcycle GPS Tracker</h1>
                                  <p className={styles.categoryDescription}>Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.</p>
                                  <div className={styles.container}>
                                          
                                                                              {items.map((item, index) => (
                                                                                  <div  key={item.id} className={styles.containerItem}>
                                                                                      <div className={styles.containerItemHeeder}>
                                                                                      <img  src={item.image} alt="..." />
                                                                                      </div>
                                                                                      
                                                                                     <div className={styles.containerItemFooter}>
                                                                                        <button className={styles.orderBtn}>Order now</button>
                                                                                     </div>
                                                                                 </div>
                                                                                 
                                                                              ))}
                                                                             
                                             
                                    
                                  </div>

          
                              </section>
       </>
    );
}