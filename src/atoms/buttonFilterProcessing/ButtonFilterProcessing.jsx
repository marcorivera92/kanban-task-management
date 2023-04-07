import styles from "./styles.module.scss";

const ButtonFilterProcessing = ({ value }) => {
  return (
    <button className={styles.main} value={value}>
      Processing
    </button>
  );
};

export default ButtonFilterProcessing;
