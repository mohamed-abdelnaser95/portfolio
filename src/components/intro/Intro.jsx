import React from 'react'
import styles from './Intro.module.css'
import Me from '../../images/undraw_programming_re_kg9v.svg'

function Intro() {
    return (
        <div className={styles.intro}>
            <div className={styles.leftIntro}>
                <div className={styles.leftWrapper}>
                    <h2 className={styles.myIntro}>Hello, My name is</h2>
                    <h1 className={styles.myName}>Mohamed Abdelnaser</h1>
                    <div className={styles.jobWrapper}>
                        <div className={styles.jobTitle}>
                            <div className={styles.jobTitleItem}>Javascript Developer</div>
                            <div className={styles.jobTitleItem}>Frontend Developer</div>
                            <div className={styles.jobTitleItem}>Backend Developer</div>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        I develope services for customers specialize in creating modern websites
                    </p>
                </div>
            </div>
            <div className={styles.rightIntro}>
                <img src={Me} alt='' className={styles.myImg} />
            </div>
        </div>
    )
}

export default Intro