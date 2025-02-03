import React, { useState } from "react";
import styles from './About.module.css';
import { getImageUrl } from "../../utils";
import { WhyUs } from "../../components/WhyUs/WhyUs";
import { Service } from "../Service/Service";
export const About =()=>{

  
    return(
         <>
     

              <header className={styles.header}>
                                <div className={styles.container}>
                               
                                  <div className={styles.overLay}>
                                          <h1>DimerTec LIMITED</h1>
                                          <p>Mega Wheel, a trusted name in automotive solutions, began as a humble dealer in spare parts. Evolving with the industry, it expanded into tracking systems, IoT, CCTV, and sales of motorbikes and trucks, offering comprehensive solutions for diverse needs since its inception.</p>
                                  </div> 
                                </div>
                    </header>


                            <main className={styles.main}>
                                <h1 className={styles.label}>About Us</h1>
                                <section className={styles.section1}>
                                    <div className={styles.container}>
                                        <h4>How it Began</h4>
                                        <p>
                                        DimerTec's journey commenced with a humble ambition—to cater to the automotive industry's needs. Initially, it served as a spare parts dealer, providing essential components to vehicle owners and repair shops alike. Over time, recognizing the evolving landscape, Mega Wheel diversified its offerings, venturing into tracking systems, IoT solutions, and CCTV technology. With a keen eye on market trends and customer demands, it expanded its portfolio to include motorbike and truck sales. This strategic growth trajectory reflects Mega Wheel's commitment to innovation, reliability, and customer satisfaction, laying the foundation for its esteemed position in the automotive and technology sectors.
                                        </p>
                                        <h4>Always Open Online and Walk-in 24hours everyday</h4>
                                        <p>
                                        Always Open Online and Walk-in 24 hours every day" is a testament to our unwavering commitment to accessibility and convenience. Whether you prefer the ease of online browsing or the personal touch of a walk-in experience, our doors—and digital channels—are always open. With round-the-clock availability, we ensure that our customers can access our services and products whenever they need them, empowering them to shop on their schedule. This dedication to flexibility and convenience reflects our customer-centric approach and reinforces our commitment to providing exceptional service at every opportunity, day or night.
                                        </p>
                                    </div>
                                    <div className={styles.container}>
                                        <h4>Reputable and Premium Automobile  Dealership in Nigeria</h4>
                                        <p>
                                        The story of the reputable and premium dealership in Nigeria is one rooted in a vision to elevate automotive standards across the region. It began with a commitment to delivering unparalleled quality and service, setting itself apart as a trusted name in the industry. From its inception, the dealership's founders recognized the importance of not just meeting but exceeding customer expectations, laying the groundwork for its enduring success.
                    As the dealership gained momentum, it swiftly became synonymous with reliability and excellence. Its reputation for premium vehicles and impeccable service spread far and wide, attracting a loyal clientele base and earning the trust of automotive enthusiasts across Nigeria. Bolstered by this trust, the dealership embarked on a journey of expansion and diversification, continually seeking to enhance its offerings and stay ahead of industry trends.
                    In response to the growing demand for innovative automotive solutions, the dealership expanded its portfolio to include a comprehensive range of services. This evolution saw the introduction of cutting-edge technologies such as tracking systems, IoT integration, and CCTV solutions, further solidifying its position as a leader in the automotive sector.
                    Additionally, recognizing the diverse needs of its customers, the dealership ventured into motorbike and truck sales, catering to a broader spectrum of automotive requirements. Through strategic growth initiatives and unwavering dedication to customer satisfaction, the dealership has earned its place as a cornerstone of the Nigerian automotive landscape, poised to continue shaping the industry for years to come.
                                        </p>
                                    </div>
                                </section>
                                <Service/>
                                 <div className={styles.sectionBreaker}>
                                      <h1>Make a Smart Choice Today</h1>
                                 </div>
                                    <section className={styles.section2}>
                                            <div className={styles.container}>
                                                 <h1>24+</h1>
                                                 <p>Project Completed</p>
                                            </div>
                                            <div className={styles.container}>
                                            <h1>17M</h1>
                                                 <p>Expert Consultation</p>
                    
                                            </div>
                                            <div className={styles.container}>
                                            <h1>+98%</h1>
                                                 <p>Customer satisfaction</p>
                    
                                            </div>
                                    </section>
                                    <WhyUs/>

                            </main>

                    
        </>
    )
}