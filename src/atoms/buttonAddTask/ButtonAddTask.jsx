import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import styles from "./styles.module.scss";

const ButtonAddTask = ({ openModal, setOpenModal }) => {
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className={styles.main}>
      <button className={styles.btn_add} onClick={handleModal}>
        <AddOutlinedIcon />
      </button>
    </div>
  );
};

export default ButtonAddTask;
