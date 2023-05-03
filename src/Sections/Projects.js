import SlidesProjects from '../Components/SlidesProjects'
import styles from './styles/projects.module.css'


export default (() => {

    
    return (
        <section className={styles.projects_container}>

            <h1>Projetos</h1>
            <SlidesProjects/>
        </section>
    )
})