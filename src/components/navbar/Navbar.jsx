import ButtonAddTask from "../../atoms/buttonAddTask/ButtonAddTask";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import styles from "./styles.module.scss";

const Navbar = ({ setOpenModal, openModal }) => {
  return (
    <div className={styles.main}>
      <div className={styles.btn_menu_one}>
        <button>
          <SmsOutlinedIcon />
        </button>
        <p className={styles.nav_label}>Inbox</p>
      </div>
      <div className={styles.btn_big}>
        <ButtonAddTask setOpenModal={setOpenModal} openModal={openModal} />
      </div>
      <div className={styles.btn_menu_two}>
        <p className={styles.nav_label}>Settings</p>
        <button>
          <SettingsOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
