import React from "react";
import styles from "./BottomFooter.module.css";


export const BottomFooter =()=>{

      return(
           <div className={styles.footer}>
                <div className={styles.footerItems}>2025 DimerTec All Rights Reserved</div>
                <div className={styles.footerItems}>Terms Of Service</div>
                <div className={styles.footerItems}>Privacy Policy</div>
                <div className={styles.footerItems}>Trust & Safty</div>
                <div className={styles.footerItems}>Law Environment</div>
           </div>
      );
}