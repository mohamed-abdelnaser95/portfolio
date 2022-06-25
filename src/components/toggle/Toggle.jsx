import React, { useContext } from 'react'
import styles from './Toggle.module.css'
import Sun from '../../images/4-clipart-sun-1.png'
import Moon from '../../images/moon-png-no-background-15.png'
import { ThemeContext } from '../context'
export default function Toggle() {

    const theme = useContext(ThemeContext)
    const DarkMode = theme.state.darkMode

    const handleClick = ()=> {
        theme.dispatch({type: "Toggle"})
    }
    return (
        <div className={styles.toggle}>
            <img src={Sun} alt='' className={styles.icon} 
            style={{marginLeft: '2px'}} />
            <img src={Moon} alt='' className={styles.icon} 
            style={{marginRight: '2px'}}/>
            <div className={styles.btn} onClick={handleClick}
            style={{left: DarkMode? '-2px' : "25px"}}>
            </div>
        </div>
    )
}
