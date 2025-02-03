import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
    <img src={getImageUrl("logo/Dimer tech Logo 3.png")} className={styles.brandLogo} alt="" />
    </a>
    <button class="navbar-toggler" type="button"  aria-expanded="false"  data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
         
        </li>
    
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/gps-systems" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          GPS Tracker
          </a>
          <ul class="dropdown-menu">

            <li><a class="dropdown-item" href="/gps-systems/4G-GPS">4G (LTE) GPS</a></li>
            <li><a class="dropdown-item" href="/gps-systems/3G-GPS">3G GPS</a></li>
            <li><a class="dropdown-item" href="/gps-systems/2G-GPS">2G GPS</a></li>
            <li><a class="dropdown-item" href="/gps-systems/obd-GPS">OBD GPS</a></li>
            <li><a class="dropdown-item" href="/gps-systems/motorcycle-GPS">Motorcycle GPS</a></li>
            <li><a class="dropdown-item" href="/gps-systems/tricycle-GPS">Tricycle GPS</a></li>

          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/iot-solutions">IoT Solution</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Services
          </a>
          <ul class="dropdown-menu">

            <li><a class="dropdown-item" href="/service/car_dealership">Car Dealership</a></li>
            <li><a class="dropdown-item" href="/service/bike_purchase">Bike Purchase</a></li>
            <li><a class="dropdown-item" href="/service/tricycle">Tricycle</a></li>
            <li><a class="dropdown-item" href="/service/auto_parts">Auto Parts</a></li>


          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/about">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link "href="/contact">Contact Us</a>
      
        </li>
      </ul>
      
    </div>
  </div>
 
  
  
</nav>
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">
      <img src={getImageUrl("logo/Dimer tech Logo 3.png")} className="logo" alt="" />

      </h5>
      <button type="button" class="close" data-bs-dismiss="offcanvas" aria-label="Close">
        <img src={ getImageUrl("nav/closeIcon.png")} class="close"alt="" />
      </button>
    </div>
    <div class="offcanvas-body">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-black" href="/gps-system" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          GPS Tracker
          </a>
          <ul class="dropdown-menu">

          <li><a class="dropdown-item" href="/gps-systems/4G-GPS">4G (LTE) GPS</a></li>
            <li><a class="dropdown-item" href="/gps-systems/3G-GPS">3G GPS</a></li>
            <li><a class="dropdown-item" href="/gps-systems/2G-GPS">2G GPS</a></li>
            <li><a class="dropdown-item" href="/gps-systems/obd-GPS">OBD GPS</a></li>
            <li><a class="dropdown-item" href="/gps-systems/motorcycle-GPS">Motorcycle GPS</a></li>
            <li><a class="dropdown-item" href="/gps-systems/tricycle-GPS">Tricycle GPS</a></li>


          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/iot-solutions">IoT Solution</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle " href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Services
          </a>
          <ul class="dropdown-menu">

          <li><a class="dropdown-item" href="/service/car_dealership">Car Dealership</a></li>
            <li><a class="dropdown-item" href="/service/bike_purchase">Bike Purchase</a></li>
            <li><a class="dropdown-item" href="/service/tricycle">Tricycle</a></li>
            <li><a class="dropdown-item" href="/service/auto_parts">Auto Parts</a></li>

          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/about">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  "href="/contact">Contact Us</a>
      
        </li>
      </ul>
       
    </div>
  </div>
</>
  )

   
}
