// import { Routes } from './Routes';
import styles from './App.module.css';
// import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {Footer} from './components/Footer/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { BottomFooter } from './components/BottomFooter/BottomFooter';

//pages
import { Home } from './pages/Home/Home';
import { Contact } from './pages/Contact/Contact';
import { About } from './pages/About/About';
import { Gps } from './pages/Gps/Gps';
import { Iot } from './pages/Iot/Iot';
import { Service } from './pages/Service/Service';
import { Header } from './components/Header/Header';
import { TopNav } from './components/TopNav/TopNav';
import { Navbar } from './components/Navbar/Navbar';
//gps pages
import { FourG } from './pages/Gps/FourG/FourG';
import { ThreeG } from './pages/Gps/ThreeG/ThreeG';
import { Obd } from './pages/Gps/OBD/Obd';
import { Motorcycle } from './pages/Gps/Motorcycle/Motorcycle';
import { TwoG } from './pages/Gps/TwoG/TwoG';
import { Tricycle } from './pages/Gps/Tricycle/Tricycle';
//service pages
import { Tricycleservice } from './pages/Service/Tricycle/Tricycle';
import { Autoparts } from './pages/Service/Autoparts/Autoparts';
import { Bikepurchase } from './pages/Service/Bikepurchase/Bikepurchase';
import { Cardealership } from './pages/Service/Cardealership/Cardealership';

function App() {
 

  return (
 
    <div className={styles.App}>

          
                 <Router>
                  <TopNav/>
                  <Navbar/>
                    <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path='/gps-systems' element={<Gps />} />
                      <Route path='/iot-solutions' element={<Iot />} />
                      <Route path='/service' element={<Service />} />
                      <Route path='/about' element={<About />} />
                      <Route path='/contact' element={<Contact />} />
                      <Route path='/gps-systems/4G-GPS' element={<FourG/>}/>
                      <Route path='/gps-systems/3G-GPS' element={<ThreeG/>}/>
                      <Route path='/gps-systems/2G-GPS' element={<TwoG/>}/>
                      <Route path='/gps-systems/obd-GPS' element={<Obd/>}/>
                      <Route path='/gps-systems/motorcycle-GPS' element={<Motorcycle/>}/>
                      <Route path='/gps-systems/tricycle-GPS' element={<Tricycle/>}/>

                      <Route path='/service/tricycle' element={<Tricycleservice />} />
                      <Route path='/service/auto_parts' element={<Autoparts />} />
                      <Route path='/service/bike_purchase' element={<Bikepurchase />} />
                      <Route path='/service/car_dealership' element={<Cardealership />} />


                    </Routes>
                  

                  <Footer />
                  <BottomFooter/>
                 </Router>

    
   </div>
     
  
  )
}

export default App
