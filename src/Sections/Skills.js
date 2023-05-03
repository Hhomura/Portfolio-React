import { useState } from 'react'
import styles from './styles/skills.module.css'
import CardSkills from '../Components/CardSkills';
export default (() => {

    const [tecnologias, setTecnologias] = useState([
        {
            title: "Java",
            description: "Conhecimento básico java. Primeiro contato com linguagem de programação e experiência de  ano e meio com projetos pessoais e participação em bolsas durante o ensino técnico profissional no IFAM.",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433"
        },
        {
            title: "Node.JS",
            description: "Conhecimento básico para médio em Node. Trabalho no projeto de conclusão de curso com essa tecnologia e desenvolveu com base na arquitetura RESTFUL",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433"
        }
        ,
        {
            title: "Javascript",
            description: "Conhecimento básico em Javascript por ter atuado em alguns projetos pessoais e também por essa ser uma das linguagens principais pro trabalho de conclusão de curso da minha primeira formação no IFAM. Uso de Node.",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433"
        }
        ,
        {
            title: "Typescript",
            description: "Conhecimento básico em Typescript.",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433"
        }
        ,
        {
            title: "C#",
            description: "Conhecimento básico para médio em C#. Uso em Games Engine.",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433"
        }
        ,
        {
            title: "Unity",
            description: "Conhecimento médio em Unity. Desenvolvi um jogo para um projeto de Iniciação científica feita inteiramente no UNITY. Conhecedor de padrões de projetos e técnicas de desenvolvimento de Jogos.",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433"
        },
        {
            title: "React",
            description: "Conhecimento básico em React. Ainda em estudos porém com alguns projetos pessoais no Github e desenvolvendo outros.",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433"
        },
        {
            title: "SQL",
            description: "Conhecimento médio em comandos SQL. Possui curso de banco de dados. Possui conhecimento com MySQL, MariaDB, PostgreSQL.",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433"
        },
        {
            title: "Coming soon...",
            description: "Novas Tecnologias a Aprender...",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433"
        }
    ]);
    return (
        <section className={styles.skills_container}>
            <p>Skills</p>
            <h2>Tecnologias</h2>
            <div className={styles.cardskills_container}>
                {tecnologias.map((item) => (
                    <CardSkills title={item.title} description={item.description} src={item.src} />
                ))}
            </div>
        </section>
    )
})