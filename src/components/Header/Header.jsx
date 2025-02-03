import React from "react";
import styles from "./Header.module.css";
import { getImageUrl } from "../../utils";

export const Header = () =>{
     return(
            <header className={styles.header}>
           
                   <div className={styles.welcomeText}>
                     <div>
                        <h1>Innovative Solution For</h1>
                        <h1>Safety Management Across</h1>
                        <h1>Diverse Sectors Worldwide</h1>
                        </div>
                         <button className={styles.qouteBtn}>GET PRICE QOUTE</button>
                   </div>
            </header>
     );
}