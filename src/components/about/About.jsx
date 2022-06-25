import styles from './About.module.css'
import rIcon from '../../images/reactjs.svg'
import eIcon from '../../images/express.png'
import mIcon from '../../images/mongodb.png'
import nIcon from '../../images/node-512.webp'
import Dev from '../../images/undraw_feeling_proud_qne1.svg'
export default function About() {
    const Icons = [mIcon, eIcon, rIcon, nIcon]
    return (
        <div>
                <div className={styles.icons}>
                    {Icons.map((icon, index) => (
                        <img key={index} src={icon}  alt='' className={styles.img}/>
                    ))}
                </div>
                <div className={styles.about}>
                        <h2 className={styles.aboutMe}>About </h2>
                        <p className={styles.aboutWord}>Fullstack Developer</p>
                </div>
            <div className={styles.container}>
                <div className={styles.aboutLeft}>
                    <img  src={Dev}  alt='' className={styles.dev}/>
                </div>
                <div className={styles.aboutRight}>
                    <p className={styles.summary}>
                        I graduated from information technology institute (ITI) as MERN stack developer, i learned the tools of the frontend like Html, Css, Jvascript, Bootstrap, Mterial UI, Saas, React js, Basics of Angular
                    </p>
                    <p className={styles.summary}>
                        Also i learned backend tools like Node js, Express and Mongo DB, and also Git and Github 
                    </p>
                    <p className={styles.summary}>
                        Some softskills like freelancing, communication and interview sessions
                    </p>
                    
                </div>
            </div>
        </div>
    )
}
