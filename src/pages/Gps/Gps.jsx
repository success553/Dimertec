import React, { useState } from "react";
import styles from './Gps.module.css';
import { getImageUrl } from "../../utils";

export const Gps =()=>{

    return(
         <>
            
                {/* <header className={styles.header}>
                     <div className={styles.container}>

                     </div>
                </header> */}
                <main className={styles.main}>
                    <section className={styles.section1}>
                         <div className={styles.container}>

                            <div className={styles.containerItems}>
                                <img src={getImageUrl("main/Placeholder image.png")} alt="" />
                            </div>
                            <div className={styles.containerItems}>
                                <h1>GPS Tracker</h1>
                                <p >Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns. </p>
                                <button className={styles.gpsBtn}> GET PRICE QUOTE</button>
                            </div>

                         </div>
                    </section>
                    <section className={styles.section}>
                        <h1  className={styles.categoryTitle}>4G lite GPS Tracking Device</h1>
                        <p className={styles.categoryDescription}>Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.</p>
                        <div className={styles.container}>

                            <div className={styles.containerItem}>
                                <a href="/gps-systems/4G-GPS">
                                <img src={getImageUrl("main/gpstracker (2).jpg")} alt="" />

                                </a>
                            </div>
                            
                            <div className={styles.containerItem}>
                            <a href="/gps-systems/4G-GPS">
                            <img src={getImageUrl("main/gpstracker (1).jpg")} alt="" />
                            </a>
                            </div>
         
                            <div className={styles.containerItem}>
                            <a href="/gps-systems/4G-GPS">
                            <img src={getImageUrl("main/gpstracker (3).jpg")} alt="" />
                            </a>
                            </div>
                          
                        </div>
                        <div className={styles.visitDeviceCategory}> 
                        <a href="/gps-systems/4G-GPS">
                              <button className={styles.visitCategoryBtn}>
                             
                            Check All 4G GPS 
                         
                            </button>
                            </a>
                        </div>
                    </section>
                    <section className={styles.section}>
                        <h1  className={styles.categoryTitle}>Motorcycle GPS Tracker</h1>
                        <p className={styles.categoryDescription}>Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.</p>
                        <div className={styles.container}>

                            <div className={styles.containerItem}>
                                <a href="/gps-systems/motorcycle-GPS">
                                  <img src={getImageUrl("main/gpstracker (5).jpg")} alt="" />
                                </a>   
                            </div>
                            
                            <div className={styles.containerItem}>
                                <a href="/gps-systems/motorcycle-GPS">
                                  <img src={getImageUrl("main/gpstracker (6).jpg")} alt="" />
                                </a>
                            </div>
         
                            <div className={styles.containerItem}>
                                <a href="/gps-systems/motorcycle-GPS">
                                  <img src={getImageUrl("main/gpstracker (7).jpg")} alt="" />
                                </a>
                            </div>
                          
                        </div>
                        <div className={styles.visitDeviceCategory}>
                        <a href="/gps-systems/motorcycle-GPS">
                        <button className={styles.visitCategoryBtn}>
                 
                            Check All Motorcycle GPS 
                            
                            </button>
                            </a>
                        </div>

                    </section>
                    <section className={styles.section}>
                        <h1  className={styles.categoryTitle}>2G GPS Tracker</h1>
                        <p className={styles.categoryDescription}>Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.</p>
                        <div className={styles.container}>

                            <div className={styles.containerItem}>
                                <a href="/gps-systems/2G-GPS">
                                    <img src={getImageUrl("main/gpstracker (1).jpg")} alt="" />
                                </a>
                            </div>
                            
                            <div className={styles.containerItem}>
                                <a href="/gps-systems/2G-GPS">
                                  <img src={getImageUrl("main/gpstracker (8).jpg")} alt="" />
                                </a>
                            </div>
         
                            <div className={styles.containerItem}>
                                <a href="/gps-systems/2G-GPS">
                                  <img src={getImageUrl("main/gpstracker (3).jpg")} alt="" />
                                </a>
                            </div>
                          
                        </div>
                            <div className={styles.visitDeviceCategory}>
                            <a href="/gps-systems/2G-GPS">
                            <button className={styles.visitCategoryBtn}>
                            
                            Check All 2G GPS 
                       
                            </button>
                            </a>
                             </div>
                    </section>
                    <section className={styles.section}>
                        <h1  className={styles.categoryTitle}>Tricycle GPS Tracker</h1>
                        <p className={styles.categoryDescription}>Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.</p>
                        <div className={styles.container}>

                            <div className={styles.containerItem}>
                                <a href="/gps-systems/tricycle-GPS">
                                  <img src={getImageUrl("main/gpstracker (3).jpg")} alt="" />
                                </a>
                            </div>
                            
                            <div className={styles.containerItem}>
                                <a href="/gps-systems/tricycle-GPS">
                                  <img src={getImageUrl("main/gpstracker (1).jpg")} alt="" />
                                </a>
                            </div>
         
                            <div className={styles.containerItem}>
                                <a href="/gps-systems/tricycle-GPS">
                                  <img src={getImageUrl("main/gpstracker (5).jpg")} alt="" />
                                </a>
                            </div>
                          
                        </div>
                        <div className={styles.visitDeviceCategory}>
                        <a href="/gps-systems/tricycle-GPS">
                        <button className={styles.visitCategoryBtn}>
                           
                            Check All Tricycle GPS 
                          
                            </button>
                            </a>
                        </div>

                    </section>
                    <section className={styles.section}>
                        < h1  className={styles.categoryTitle}>3G GPS Tracker</h1>
                        < p className={styles.categoryDescription}>Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.</p>
                        <div className={styles.container}>

                            <div className={styles.containerItem}>
                                <a href="/gps-systems/3G-GPS">
                                   <img src={getImageUrl("main/gpstracker (8).jpg")} alt="" />
                                </a>
                            </div>
                            
                            <div className={styles.containerItem}>
                                <a href="/gps-systems/3G-GPS">
                                <  img src={getImageUrl("main/gpstracker (6).jpg")} alt="" />
                                </a>
                            </div>
         
                            <div className={styles.containerItem}>
                                <a href="/gps-systems/3G-GPS">
                                   <img src={getImageUrl("main/gpstracker (7).jpg")} alt="" />
                                </a>
                            </div>
                          
                        </div>
                        <div className={styles.visitDeviceCategory}>
                        <a href="/gps-systems/3G-GPS">
                        <button className={styles.visitCategoryBtn}>
                            
                            Check All 3G GPS 
                       
                            </button>
                            </a>
                        </div>
                    </section>
                    <section className={styles.section}>
                        < h1  className={styles.categoryTitle}>OBD GPS Tracker</h1>
                        < p className={styles.categoryDescription}>Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.</p>
                        <div className={styles.container}>

                            <div className={styles.containerItem}>
                                <a href="/gps-systems/obd-GPS">
                                   <img src={getImageUrl("main/gpstracker (8).jpg")} alt="" />
                                </a>
                            </div>
                            
                            <div className={styles.containerItem}>
                                <a href="/gps-systems/obd-GPS">
                                   <img src={getImageUrl("main/gpstracker (6).jpg")} alt="" />
                                </a>
                            </div>
         
                            <div className={styles.containerItem}>
                                <a href="/gps-systems/obd-GPS">
                                   <img src={getImageUrl("main/gpstracker (7).jpg")} alt="" />
                                </a>
                            </div>
                          
                        </div>
                        <div className={styles.visitDeviceCategory}>
                        <a href="/gps-systems/obd-GPS">
                        <button className={styles.visitCategoryBtn}>
                             
                            Check All OBD GPS 
                           
                            </button>
                            </a>
                        </div>
                    </section>
                </main>
            
         </>
    );
}