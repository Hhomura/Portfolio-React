import styles from './styles/slides.module.css'

//Imagens
import img1 from '../assets/slide1.jpg'
import img2 from '../assets/slide2.jpg'
import img3 from '../assets/slide3.jpg'
import img4 from '../assets/slide4.jpg'

export default(() =>{
    return(

        <div className={styles.slider}>
                <div className={styles.slides}>

                    <input type='radio' name='radio_btn' id={styles.radio1} />
                    <input type='radio' name='radio_btn' id={styles.radio2} />
                    <input type='radio' name='radio_btn' id={styles.radio3} />
                    <input type='radio' name='radio_btn' id={styles.radio4} />

                    <div className={`${styles.slide} && ${styles.first}`}>
                        <img src={img1} alt='Imagem 1' />
                    </div>
                    <div className={styles.slide}>
                        <img src={img2} alt='Imagem 2' />
                    </div>
                    <div className={styles.slide}>
                        <img src={img3} alt='Imagem 3' />
                    </div>
                    <div className={styles.slide}>
                        <img src={img4} alt='Imagem 4' />
                    </div>

                    <div className={styles.navigation_auto}>
                        <div className={styles.auto_btn1}></div>
                        <div className={styles.auto_btn2}></div>
                        <div className={styles.auto_btn3}></div>
                        <div className={styles.auto_btn4}></div>
                    </div>
                </div>

                <div className={styles.manual_navigation}>
                    <label for={styles.radio1} className={styles.manual_btn}></label>
                    <label for={styles.radio2} className={styles.manual_btn}></label>
                    <label for={styles.radio3} className={styles.manual_btn}></label>
                    <label for={styles.radio4} className={styles.manual_btn}></label>
                </div>
            </div>
    )
})