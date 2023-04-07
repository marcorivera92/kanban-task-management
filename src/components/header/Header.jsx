import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.main}>
      <h1> Kanban </h1>
      <img src="/images/user.png" alt="user" />
    </div>
  );
};

export default Header;
