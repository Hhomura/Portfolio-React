import { useState } from 'react'
import styles from './styles/cardskills.module.css'

export default (({ title, description, src }) => {

    const [desc, setDesc] = useState(description);
    return (
            <div className={styles.cardskills_card}>
                <img src={src} />
                <div className={styles.cardskills_card_txt}>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            </div>
    )
})