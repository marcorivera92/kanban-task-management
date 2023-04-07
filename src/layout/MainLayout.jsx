import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import styles from "./styles.module.scss";

const MainLayout = ({ setOpenModal, openModal }) => {
  return (
    <div className={styles.main}>
      <div className={styles.navbar}>
        <Navbar setOpenModal={setOpenModal} openModal={openModal} />
      </div>
      <div className={styles.center}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.hero}>
          <Main />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
