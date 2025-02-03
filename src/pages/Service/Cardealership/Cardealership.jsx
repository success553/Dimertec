import React from "react";
import styles from './Cardealership.module.css';
import { getImageUrl } from "../../../utils";


export const Cardealership =()=>{
    return(
        <>
           <header className={styles.header}>
                                    <div className={styles.container}>
                                       <h1 className={styles.pageTitle}>Car Dealership</h1>
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
                               </header>
                               <main className={styles.main}>
                                    <section className={styles.section1}>
                                             <div className={styles.searchContainer}>
                                                  <input type="text" name="" id=""  className={styles.searchInput} placeholder="Search Category"/>
                                                  <button className={styles.searchBtn}>Search</button>
                                             </div>
                                    </section>
                                      <div className={styles.titleContainer}>
                                         <h1 className={styles.categoryTitle}>Browser Cars Dealership</h1>
                                      </div>
                                    <section className={styles.section2}>
                                           <div className={styles.serviceItem}>
                                               
                                                 <img src={getImageUrl("main/image 106 (1).png")} className={styles.serviceItemImage} alt="" />
                                                <h4>Auto Dealership</h4>
                                           </div>
                                           <div className={styles.serviceItem}>
                                                 <img src={getImageUrl("main/image 82 (2).png")} className={styles.serviceItemImage} alt="" />
                                                <h4>Auto Dealership</h4>
                                           </div>
                                           <div className={styles.serviceItem}>
                                                 <img src={getImageUrl("main/image 82 (1).png")} className={styles.serviceItemImage} alt="" />
                                                <h4>Auto Dealership</h4>
                                           </div>
                                           <div className={styles.serviceItem}>
                                                 <img src={getImageUrl("main/image 106.png")} className={styles.serviceItemImage} alt="..." />
                                                <h4>Auto Dealership</h4>
                                           </div>
                                           <div className={styles.serviceItem}>
                                                 <img src={getImageUrl("main/Image-living room.png")} className={styles.serviceItemImage} alt="" />
                                                <h4>Auto Dealership</h4>
                                           </div>
                                           <div className={styles.serviceItem}>
                                                 <img src={getImageUrl("main/Mask Group.png")} className={styles.serviceItemImage} alt="" />
                                                <h4>Auto Dealership</h4>
                                           </div>
                                     
                                    
                                      </section>
                      </main>
        </>
    );
}