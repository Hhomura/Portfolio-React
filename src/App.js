import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import styles from './App.module.css';
import Introduction from "./Sections/Introduction";
import Resume from "./Sections/Resume";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Contacts from "./Sections/Contacts";

function App() {
  return (
    <div>
      <NavBar/>
      <div className={styles.app_container}>
        <Introduction/>
        <Resume/>
        <Skills/>
        <Projects/>
        <Contacts/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
