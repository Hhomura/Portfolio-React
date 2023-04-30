import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import styles from './App.module.css'
import Introduction from "./Sections/Introduction";

function App() {
  return (
    <div>
      <NavBar/>
      <div className={styles.app_container}>
        <Introduction/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
