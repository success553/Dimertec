import React from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";
import { BottomFooter } from "../BottomFooter/BottomFooter";
export const Footer  = () =>{

    return(
       <>
        <footer className={styles.footer}>
             <div className={styles.footerItem}>
                <h3 >Subscrib To The Newsletter</h3>
                 <div className={styles.newsletterBox}>
                      <input type="text" name=""placeholder="Enter Your Email"/>
                      <button className={styles.newsBtn}> c </button>
                 </div>
                  <div className={styles.socialIcon}>
                      <div><img src={getImageUrl("icon/Twitter@2x.png")}/></div>
                      <div><img src={getImageUrl("icon/Facebook.png")}/></div>
                      <div><img src={getImageUrl("icon/Linkedin.png")}/></div>
                  </div>
             </div>
             <div className={styles.footerItem}>
                  <div className={styles.containerLink}>
                  <u className={styles.footerItems}>
                    <h3 className={styles.linkTitle}>Buying & Selling</h3>
                    <li className={styles.footerItemsList}><a href="#">Find A car</a></li>
                    <li className={styles.footerItemsList}><a href="#">Listings By City</a></li>
                    <li className={styles.footerItemsList}><a href="#">Sell your car</a></li>
                    <li className={styles.footerItemsList}><a href="#">Compare side by side</a></li>
                 </u>
                 <u className={styles.footerItems}>
                    <h3 className={styles.linkTitle}>Resource</h3>
                    <li className={styles.footerItemsList}><a href="#">Blog</a></li>
                    <li className={styles.footerItemsList}><a href="#">Guides</a></li>
                    <li className={styles.footerItemsList}><a href="#">FAQ</a></li>
                    <li className={styles.footerItemsList}><a href="#">Help Center</a></li>
                 </u>
                 <u className={styles.footerItems}>
                    <h3 className={styles.linkTitle}>About</h3>
                    <li className={styles.footerItemsList}><a href="#">Company</a></li>
                    <li className={styles.footerItemsList}><a href="#">Career</a></li>
                    <li className={styles.footerItemsList}><a href="#">Contact</a></li>
           
                 </u>
                  </div>
             </div>
             {/* <div className={styles.footerBottom}>

             </div> */}
      

        </footer>
        
          </>
    );

}
