import React from "react";
import { useState } from "react";
import styles from './Service.module.css';
import { getImageUrl } from "../../utils";
import { WhyUs } from "../../components/WhyUs/WhyUs";

export const Service =()=>{

     
      
    return(
        <>
         
           {/* <header className={styles.header}>
                <div className={styles.container}>
                   <h1 className={styles.pageTitle}>Our Service</h1>
                      <div className={styles.containerItem}>
                          <div className={styles.itemList}>
                              <h5>Auto Dealership</h5>
                              <p>we Provide many of the best services for you  and you will get the best benefits here  </p>
                          </div>
                          <div className={styles.itemList}>
                              <h5>TRACKING SYSTEM</h5>
                              <p>we Provide many of the best services for you  and you will get the best benefits here </p>
                          </div>
                          <div className={styles.itemList}>
                              <h5>IoT SOLUTION</h5>
                              <p>we Provide many of the best services for you  and you will get the best benefits here  </p>
                          </div>
                      </div>
                </div>
           </header> */}
           <main className={styles.main}>
                {/* <section className={styles.section1}>
                         <div className={styles.searchContainer}>
                              <input type="text" name="" id=""  className={styles.searchInput} placeholder="Search Category"/>
                              <button className={styles.searchBtn}>Search</button>
                         </div>
                </section> */}
                  <div className={styles.titleContainer}>
                     <h1 className={styles.categoryTitle}>Product Category</h1>
                  </div>
                <section className={styles.section2}>
                     <div className={styles.serviceItem}>
                         <a href="/service/bike_purchase">
                           <img src={getImageUrl("main/image 106 (1).png")} className={styles.serviceItemImage} alt="" />
                           </a>
                          <h4>Bike Purchase</h4>
                     </div>
                     
                     <div className={styles.serviceItem}>
                         <a href="/service/car_dealership">
                           <img src={getImageUrl("main/image 82 (2).png")} className={styles.serviceItemImage} alt="" />
                           </a>
                          <h4>Car Dealership</h4>
                     </div>
                     <div className={styles.serviceItem}>
                         <a href="/service/tricycle"> 
                           <img src={getImageUrl("main/image 82 (1).png")} className={styles.serviceItemImage} alt="" />
                           </a>
                          <h4>Tricycle Dealership</h4>
                     </div>
                     <div className={styles.serviceItem}>
                        <a href="/service/auto_parts">
                           <img src={getImageUrl("main/image 106.png")} className={styles.serviceItemImage} alt="..." />
                           </a>
                          <h4>Auto Dealership</h4>
                     </div>
                    
                   <div className={styles.serviceItem}>
                     <a href="/gps-systems/motorcycle-GPS">
                         <img src={getImageUrl("main/image 82 (1).png")} className={styles.serviceItemImage} alt="" />
                         </a>
                        <h4>Motorcycle GPS Tracker</h4>
                   </div>
                   <div className={styles.serviceItem}>
                       <a href="/gps-systems/obd-GPS">
                         <img src={getImageUrl("main/image 106.png")} className={styles.serviceItemImage} alt="..." />
                         </a>
                        <h4>OBD GPS Tracker</h4>
                   </div>
                   <div className={styles.serviceItem}>
                     <a href="/gps-systems/tricycle-GPS">
                         <img src={getImageUrl("main/image 106 (1).png")} className={styles.serviceItemImage} alt="" />
                         </a>
                        <h4>Tricycle GPS Tracker</h4>
                   </div>
                   
                   <div className={styles.serviceItem}>
                   <a href="/gps-systems/2G-GPS">
                         <img src={getImageUrl("main/image 82 (2).png")} className={styles.serviceItemImage} alt="" />
                         </a>
                        <h4>2G GPS Tracke</h4>
                   </div>
                   <div className={styles.serviceItem}>
                   <a href="/gps-systems/3G-GPS">
                         <img src={getImageUrl("main/image 82 (1).png")} className={styles.serviceItemImage} alt="" />
                         </a>
                        <h4>3G GPS Tracker</h4>
                   </div>
                   <div className={styles.serviceItem}>
                   <a href="/gps-systems/4G-GPS">
                         <img src={getImageUrl("main/image 106.png")} className={styles.serviceItemImage} alt="..." />
                         </a>
                        <h4>4G GPS Tracker</h4>
                   </div>
                     {/* <div className={styles.serviceItem}>
                           <img src={getImageUrl("main/Image-living room.png")} className={styles.serviceItemImage} alt="" />
                          <h4>Auto Dealership</h4>
                     </div>
                     <div className={styles.serviceItem}>
                           <img src={getImageUrl("main/Mask Group.png")} className={styles.serviceItemImage} alt="" />
                          <h4>Auto Dealership</h4>
                     </div>
                */}
              
                </section>
                <section className={styles.section3}>
                     {/* <div className={styles.serviceItem}>hhh</div>
                     <div className={styles.serviceItem}></div>
                     <div className={styles.serviceItem}></div> */}
                     <div className={styles.serviceItem}>
                              <h1>Discover Our  Product Line</h1>
                              <p>When developing our products, we primarily focus on three main pillars – reliability, security, and ease of use. We believe these elements are essential for the success of any IoT project.
                              </p>
                         <button className={styles.exploreBtn}>Explore more</button>
                     </div>
                          <div id="carouselExampleIndicators" class="carousel slide">
                              <div class="carousel-indicators">
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                              </div>
                              <div class="carousel-inner">
                              <div class="carousel-item active">
                                
                                                
                           <img src={getImageUrl("main/image 106.png")} className={styles.serviceItemImage}  class="d-block w-100" alt="..." />
                              </div>
                              <div class="carousel-item bg-dark">
                              <img src={getImageUrl("main/Rectangle 24.png")} className={styles.serviceItemImage}  class="d-block w-100" alt="..." />
                              </div>
                              <div class="carousel-item">
                                   <img src={getImageUrl("main/Rectangle 25.png")} className={styles.serviceItemImage}  class="d-block w-100" alt="..." />
                              </div>
                              </div>
                              <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                              </button>
                              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                              <span class="carousel-control-next-icon bg-primary" aria-hidden="true"></span>
                              <span class="visually-hidden">Next</span>
                              </button>
                              </div>
                </section>
                <section className={styles.section4}>
                <div className={styles.sectionBreaker}>
                                 <h1>Make a Smart Choice Today</h1>
                      </div>
                </section>
               <WhyUs/>

           </main>

        </>
    )
}