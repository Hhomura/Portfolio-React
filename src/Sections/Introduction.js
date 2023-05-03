import styles from './styles/Introduction.module.css'
export default (() =>{
    return(
        <section className={styles.Introduction_container}>
            <div class={styles.Introduction_sub_container}>
                <div className={`${styles.Introduction_container_txts} ${styles.slide_in_left}`}>
                    <h1>Desenvolvedor Web e De Jogos</h1>
                    <h2>Olá, me chamo Felipe!</h2>
                </div>
            </div>
        </section>
    )
})