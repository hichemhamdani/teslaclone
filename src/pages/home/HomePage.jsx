import React from 'react'
import styles from "./HomePage.module.css"
import Sections from '../../components/homeSection/Sections'

import Footer from '../../components/footer/Footer'

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
        <Sections
        title = "Model S"
        description = "Order Online"
        backgroundImg = "/images/model-s.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
        id="modelS" 
        />
        <Sections
        title = "Model Y"
        description = "Order Online"
        backgroundImg = "/images/model-y.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory" 
        id="modelY"
        />
        <Sections
        title = "Model 3"
        description = "Order Online"
        backgroundImg = "/images/model-3.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory" 
        id="model3"
        />
        <Sections
        title = "Model X"
        description = "Order Online"
        backgroundImg = "/images/model-x.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory" 
        id="modelX"
        />
        <Sections
        title = "Lowest Cost Solar Panels in America"
        description = "Money-Back Guarantee"
        backgroundImg = "/images/solar-panel.jpg"
        leftBtnText = "Order Now"
        />
        <Sections
        title = "Solar for new roofs"
        description = "Money-Back Guarantee"
        backgroundImg = "/images/solar-roof.jpg"
        leftBtnText = "Order Now"
        />
        <Sections
        title = "Lowest Cost Solar Panels in America"
        description = "Money-Back Guarantee"
        backgroundImg = "/images/accessories.jpg"
        leftBtnText = "Shop Now"
        />

    <footer>
      <Footer />
    </footer>
    </div>
  )
}

export default HomePage