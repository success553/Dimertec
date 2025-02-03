import React, { useState } from "react";
import styles from './Main.module.css';
import { getImageUrl } from "../../utils";
import {Carousel} from '../Carousel/Carousel';
import {Slider} from '../Slider/Slider';
import { Gps } from "../../pages/Gps/Gps";
export const  Main = () =>{
    //const [activeBtn,setActive] = useState(false);
     const [clickBtn, setBtnActive] = useState(false);
    
     
    return(
        <main className={styles.main}>
            <section className={styles.section1}>
                  <h1 className={styles.title1}>Automobile Tyers Brand</h1>
                  <div className={styles.container1}>
                            <div className={styles.brandItems}></div>
                            <div className={styles.brandItems}></div>
                            <div className={styles.brandItems}></div>

                     </div>
                   <div className={styles.container3}>
                   <img src={getImageUrl("main/Rectangle 4217.png")} alt="image"/>
                      <div className={styles.items}>
                                <div className={styles.item1}>
                                    <h3>Wheels For Everyone</h3>
                                    <p>we Provide many of the best servises for you  and you will get the best benefits here </p>

                                    <button className={styles.ReadMoreBtn}>Read More</button>
                                </div>
                      </div>
                   </div>
                   <div className={styles.titleContainer}>
                      <hr/>
                      <h1 className={styles.title2}>Our Services</h1>
                      <p>we Provide many of the best servises for you  and you will get the best benefits here </p>
                   </div>
                 
                      <div className={styles.container2}>
                           <div className={styles.items}>
                           <img src={getImageUrl("icon/car.png")}/>
                               <h3>Top Buy & Sell Automobile</h3>
                               <p>we Provide many of the best servises for you  and you will get the best benefits here </p>
                           </div>
                           <div className={styles.items}>
                           <img src={getImageUrl("icon/wallet.png")}/>
                             <h3>tracking System</h3>
                             <p>we Provide many of the best servises for you  and you will get the best benefits here </p>                           </div>
                           <div className={styles.items}>
                           <img src={getImageUrl("icon/bus.png")}/>
                               <h3>Dealership</h3>
                               <p>we Provide many of the best servises for you  and you will get the best benefits here </p>
                                   </div>
                       </div>
            </section>
            <section>
                <Gps/>
            </section>
            <section className={styles.section2}>
                <div className={styles.sectionBreak}>
                     <span><img src={getImageUrl("icon/Vector.png")}/></span> <h4>   Unlocking the power of connectivity, MegaWheel leads the way in IoT solutions .....</h4>
                </div>
                <div className={styles.container1}>
                  <Slider/>
                </div>
                <div className={styles.titleContainer}>
                    <hr />
                     <h1 className={styles.title1}>Explore</h1>
                </div>
                <div className={styles.container2}>

                      <div className={styles.ChooseMobile}>
                         <button                         
                           className={`${styles.mobileBtn} ${styles.activeBtn} ` }
                          >Automobiles</button>
                         <button 
                          className={`${styles.mobileBtn}`}
                         >Tracking System</button>
                         <button     
                          className={`${styles.mobileBtn}`}>OED/ODM</button>
                      </div>
                    <div>
                          <Carousel/>
                    </div>
                </div>
            </section>
            <section className={styles.section3}>
                <div className={styles.sectionBreak}>
                    <div className={styles.breakText}>
                        <h1>Make A Smart Check Today</h1>
                    </div>
                    <div className={styles.breakText}>
                        <h1>24</h1><p>hours</p>
                    </div>
                </div>
                <div className={styles.titleContainer}>
                <hr />
                 <h1 className={styles.title3}>Our Customers Feedback</h1>
                 </div>
                  <div className={styles.container2}>
                        <div className={styles.feedBack}>
                            <div className={styles.feedbackHearder}>
                                <div className={styles.feedBackImage}>
                                     <img src={getImageUrl("feedback/Rectangle 4214.png")} alt="image"/>
                                </div>
                                <div className={styles.feedBackSenderDetails}>
                                    <div className={styles.SenderName}>
                                        <h2>Andrew James</h2>
                                    </div>
                                    <div className={styles.feedBackDescription}>
                                    <p>bought corolla 2008</p>

                                    </div>

                                </div>
                            </div>
                            <div className={styles.feedbackBody}>
                                <p className={styles.FeedbackText}>The listing was hot (more than 170 bids). Everything worked well. We appreciated a simple process. Listing page, chat with a seller, the auction, escrow service – everything was great and we didn’t need anything on top. </p>
                            </div>
                        </div>
                        <div className={styles.feedBack}>
                            <div className={styles.feedbackHearder}>
                                <div className={styles.feedBackImage}>
                                  <img src={getImageUrl("feedback/Rectangle 4214 (1).png")} alt="image"/>
                                </div>
                                <div className={styles.feedBackSenderDetails}>
                                    <div className={styles.SenderName}>
                                        <h2>Andrew James</h2>
                                    </div>
                                    <div className={styles.feedBackDescription}>
                                    <p>Bought 17 Baja Model 3 </p>

                                    </div>

                                </div>
                            </div>
                            <div className={styles.feedbackBody}>
                                <p className={styles.FeedbackText}>The listing was hot (more than 170 bids). Everything worked well. We appreciated a simple process. Listing page, chat with a seller, the auction, escrow service – everything was great and we didn’t need anything on top.
                                     </p>
                            </div>
                        </div><div className={styles.feedBack}>
                            <div className={styles.feedbackHearder}>
                                <div className={styles.feedBackImage}>
                                   <img src={getImageUrl("feedback/Rectangle 4214 (2).png")} alt="image"/>
                                </div>
                                <div className={styles.feedBackSenderDetails}>
                                    <div className={styles.SenderName}>
                                        <h2>Andrew James</h2>
                                    </div>
                                    <div className={styles.feedBackDescription}>
                                        <p>Bought Mercedes Benz  C-class </p>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.feedbackBody}>
                                <p className={styles.FeedbackText}>The listing was hot (more than 170 bids). Everything worked well. We appreciated a simple process. Listing page, chat with a seller, the auction, escrow service – everything was great and we didn’t need anything on top. </p>
                            </div>
                        </div>
                  </div>
                <hr/>
                <div className={styles.titleContainer}>
                        <hr />
                        <h1 className={styles.title4}>Latest News & Blogs</h1>
                 </div>
                <div className={styles.container1}>
              
                           <div className={styles.items}>
                           <img src={getImageUrl("main/Rectangle 2 (1).png")} alt="image"/>
                             <div className={styles.itemsFooter}><h4>Is The 2024 Power Bike</h4></div>
                           </div>
                           <div className={styles.items}>
                            <img src={getImageUrl("main/Rectangle 2@2x.png")} alt="image"/>
                            <div className={styles.itemsFooter}><h4>Compact Steamroller: Tricycle</h4></div>
                           </div>
                           <div className={styles.items}>
                            <img src={getImageUrl("main/Rectangle 2.png")} alt="image"/>
                            <div className={styles.itemsFooter}><h4>2024 Michelin Tyers</h4></div>
                           </div>
                          
                </div>
                
            </section>
         
        </main>
    );
}