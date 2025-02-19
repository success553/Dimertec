import React, { useState } from "react";
import styles from './Iot.module.css';
import { getImageUrl } from "../../utils";
import { WhyUs } from "../../components/WhyUs/WhyUs";
export const Iot =()=>{

    return(
         <>
            
                 <header className={styles.header}>
                        <div className={styles.container}>
                            <h1>Iot Solutions</h1>
                        </div>
                 </header>
                 <main className={styles.main}>
                     <section className={styles.section1}>
                            <h1>We embody the future of security systems and automation.</h1>
                            <p>Unlock the future of security and automation with our exclusive offer! Experience unparalleled innovation and efficiency in modern technology today.</p>
                
                    </section>
                    <section className={styles.section2}>
                        <div className={styles.serviceItem}>
                            <h1>Solar IP Camera</h1>
                            <p>Solar IP Camera: Harnesses solar energy for continuous operation, ideal for remote locations or areas without access to power sources.</p>
                            <img src={getImageUrl("main/Placeholder image (2).png")} alt="" />
                            <h1>IP66 Waterproof</h1>
                            <p>IP66 Waterproof Camera: Designed to withstand harsh weather conditions, ensuring reliable outdoor surveillance with durable, weatherproof construction.</p>
                            <img src={getImageUrl("main/Mask Group.png")} alt="" />
                        </div>
                        <div className={styles.serviceItem}>
                            <h1>PIR Mobile Detection</h1>
                            <p>PIR Mobile Detection: Utilizes passive infrared technology to detect motion, offering efficient and accurate mobile detection for enhanced security surveillance.</p>
                            <img src={getImageUrl("main/Placeholder image (3).png")} alt="" />
                            <h1>Wired Camera</h1>
                            <p>Wired Camera: Offers stable and reliable connectivity through wired connections, ensuring continuous surveillance with minimal risk of signal interference.</p>
                            <img src={getImageUrl("main/Placeholder image (4).png")} alt="" />
                        </div>
                  
                    </section>
                      <WhyUs/>
                 </main>
            
         </>
    )
}