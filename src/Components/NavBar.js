import styles from './styles/navbar.module.css'


export default(() =>{
    return(
        <nav className={styles.navbar_container}>
            <div className={styles.navbar_logo}>
                <h2>Akemis Companys</h2>
            </div>

            <div className={styles.navbar_links}>
                <ul>
                    <li><a>About Me</a></li>
                    <li><a>Skills</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Contacts</a></li>
                </ul>
            </div>
        </nav>
    )
})