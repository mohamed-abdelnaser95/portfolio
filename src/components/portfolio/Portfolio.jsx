import React from 'react'
import styles from './Portoflio.module.css'
import { Card } from 'react-bootstrap'
// import Img from '../../images/kasper.png'
import Img from '../../images/leon.png'
export default function Portfolio() {

    const PortoImg = [1, 2, 3, 4, 5, 6,2]
    return (
        <div>
            <div className={styles.port}>
                    <h2 className={styles.title}>Portfolio </h2>
                    <p className={styles.portfolioWord}>If you do it right, it will last forever</p>
            </div>
            <div className={styles.container}>
                {PortoImg.map((item, index) => (
                    <Card key={index} style={{ width: '18rem' }} className={styles.card}>
                    <Card.Img className={styles.cardImg} variant="top" src={Img} />
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>

    )
}

// <Card.Title>Card Title</Card.Title>
//                                 <Card.Text>
//                                 Some quick example text to build on the card title and make up the bulk of
//                                 the card's content.
//                                 </Card.Text>
//                                 <Button variant="primary">Go somewhere</Button>