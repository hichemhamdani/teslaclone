import React from 'react'
import Fade from 'react-reveal/Fade';

import styles from "./Section.module.css"

const Sections = ({rightBtnText,leftBtnText,backgroundImg,description,title,id}) => {
  return (
    <div id={id} style={{backgroundImage:`url(${backgroundImg})`}} className={styles.wrap}>
      <Fade>
        <div className={styles.itemText}>
            <h1>{title}</h1>
            <p>{description}</p>         
        </div>
      </Fade>
        <div className={styles.bottom}>
          <Fade bottom>
            <div className={styles.buttonsGroup}>
                <button className={styles.leftButton}>{leftBtnText}</button>
                {rightBtnText ? <button className={styles.rightButton}>{rightBtnText}</button> : null }
            </div>
          </Fade>
            <img className={styles.arrow} src="/images/down-arrow.svg" alt="" />
        </div>
    </div>
  )
}

export default Sections