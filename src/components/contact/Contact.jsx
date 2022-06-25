import styles from './Contact.module.css'
import Phone from '../../images/phone.png'
import Email from '../../images/email.png'
import Location from '../../images/location.png'
import { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../context'

export default function Contact() {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const theme = useContext(ThemeContext)
    const DarkMode = theme.state.darkMode

    const sty = {
        backgroundColor:DarkMode &&'#222',
        borderBottom:DarkMode &&'1px solid "#fff',
        color: DarkMode && '#fff',
    }
    const handleSubmit = (e)=> {
        e.preventDefault();

        emailjs.sendForm(
            'service_cs24ebj', 
            'template_vrpqt3p', 
            formRef.current, 
            'BGlAWK235CKxpOGvo')
        .then((result) => {
            console.log(result.text);
            setDone(true)
            setTimeout(() => {
                setDone(false)
            }, 2000);
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div className={styles.contact}>
        <h2 className={styles.title}>Contact</h2>
            <div className={styles.container}>
                <div className={styles.leftSide}></div>
                <div className={styles.wrapper}>
                    <div className={styles.contactLeft}>
                        <h2 className={styles.leftTitle} style={{
                            color: DarkMode && "#fff"}}>
                            Let's discuss your project
                        </h2>
                        <div className={styles.leftInfo} style={{
                            color: DarkMode && "#fff"}} >
                            <div className={styles.cData}>
                            <img src={Phone} alt='' className={styles.imgData}/>
                                <p className={styles.infoData}>
                                +20 1030768420</p>
                            </div>
                            <div className={styles.cData}>
                                <img src={Email} alt='' className={styles.imgData}/>
                                <p className={styles.infoData}>
                                mohamed.abdelnaser159@gmail.com</p>
                            </div>
                            <div className={styles.cData}>
                                <img src={Location} alt='' className={styles.imgData}/>
                                <p className={styles.infoData} >
                                ALmakhbaz alaaly street, Ismailia, Egypt</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contactRight}>
                    <p className={styles.rightDesc} style={{
                        color: DarkMode && "#fff"}}>
                        <b>What's your story?</b> Get in touch, always available if the right project comes to me
                    </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input style={sty}  type='text' placeholder='Name' name='user_name' />

                            <input style={sty} type='text' placeholder='Email' name='user_email' />

                            <input style={sty} type='text' placeholder='Subject' name='user_subject' />

                            <textarea style={sty} rows={5} placeholder='Message' name='user_message' />
                            <button className={styles.formBtn}>Submit</button>
                            {done && <span style={{fontSize: '18px', color:'#444', padding:'10px', borderLeft:'3px solid "red"'}}>Message sent successfully...</span>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
