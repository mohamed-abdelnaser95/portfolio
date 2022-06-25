import React from 'react'
import styles from './Footer.module.css'
import Icon from '../../images/phone.png'
export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.social}>
                <div className={styles.media}>
                    <img src={Icon} alt='' className={styles.icon}/>
                    <p className={styles.info}>Linkedin</p>
                </div>
                <div className={styles.media}>
                    <img src={Icon} alt='' className={styles.icon}/>
                    <p className={styles.info}>Github</p>
                </div>
                <div className={styles.media}>
                    <img src={Icon} alt='' className={styles.icon}/>
                    <p className={styles.info}>WhatsApp</p>
                </div>
                <div className={styles.media}>
                    <img src={Icon} alt='' className={styles.icon}/>
                    <p className={styles.info}>Gmail</p>
                </div>
            </div>
        </div>
    )
}
