import styles from './styles/resume.module.css'
import profile from '../assets/meme.jpg'
export default (() =>{
    return (
        <section className={styles.resume_container}>
            <h1 className={styles.resume_container_title}>About Me</h1>
            <div className={styles.resume_container_sub}>
                <div className={styles.resume_foto}>
                    <img className={styles.slideInLeft} src={profile}/>
                </div>
                <div className={`${styles.resume_resumetxt}` }>
                    <div className={`${styles.resume_resumetxt_sub} && ${styles.slideInRigth}`} >
                        <h2>Felipe Santos Ramos</h2>
                        <p>
                            Olá, me chamo Felipe Santos Ramos. Sou técnico de nivel médio em desenvolvimento de Jogos Digitais pelo IFAM campus avançado de Manacapuru e atualmente sou estudante de Análise e Desenvolvimento de Sistemas Pela UNIFAVIP.
                        </p>
                        <p>Gosto bastante de Desenvolvimento Web e pretendo seguir na área porém, tenho experiência com criação de aplicações para mobile e jogos, por isso não pretendo parar os estudos pra essas outras áreas.</p>
                        <p>
                            Sou uma pessoa comuniicativa e me dou bem em trabalhos de equipe. Consigo me adaptar em qualquer ambiente de trabalho e no que puder sempre ajudo o próximo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
})