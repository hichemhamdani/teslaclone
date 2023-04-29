import React from 'react'
import { useState } from 'react';

import styles from "./Header.module.css"
import MenuIcon from '@mui/icons-material/Menu';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.headerContainer}>
        <a href="#">
            <img src="/images/logo.svg" alt="" />
        </a>
        <div className={styles.menu}>
            <p><a href="#modelS">MODEL S</a></p>
            <p><a href="#model3">MODEL 3</a></p>
            <p><a href="#modelX">MODEL X</a></p>
            <p><a href="#modelY">MODEL Y</a></p>
        </div>
        <div className={styles.rightMenu}>
            <p><a href="">Shop</a></p>
            <MenuIcon className={styles.hamburger} onClick={()=>setIsOpen(true)}/>
        </div>
        <div style={{transform:isOpen ? "translateX(0)" : "translateX(100%)"}} className={styles.burgerMenu}>
            <div className={styles.close}>
              <HighlightOffIcon style={{cursor:"pointer"}} onClick={()=>setIsOpen(false)} />
            </div>
            <li><a href="">Existing Inventory</a></li>
            <li><a href="">Used Inventory</a></li>
            <li><a href="">Trade-in</a></li>
            <li><a href="">Cyber Truck</a></li>
            <li><a href="">Roadaster</a></li>
        </div>
    </div>
  )
}

export default Header