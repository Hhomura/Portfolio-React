import styles from './styles/contacts.module.css'
import profile from '../assets/profile.jpg'
import {BsLinkedin, BsFacebook, BsInstagram, BsGithub} from 'react-icons/bs'

export default(() =>{

    return(
        <section className={styles.contacts_container}>
            <h1>Perfil</h1>
            <div className={styles.contacts_maincard}>
                <img src={profile}/>
                <h2>Felipe Santos Ramos</h2>
                <p> Técnico em Programação de Jogos Digitais e estudante em Análise e Desenvolvimento de Sistemas.</p>
            </div>
            <div className={styles.contacts_container_links}>
                <ul>
                    <li><a href='#'><BsLinkedin/></a></li>
                    <li><a href='#'><BsInstagram/></a></li>
                    <li><a href='#'><BsGithub/></a></li>
                    <li><a href='#'><BsFacebook/></a></li>
                </ul>
            </div>
        </section>
    )
})