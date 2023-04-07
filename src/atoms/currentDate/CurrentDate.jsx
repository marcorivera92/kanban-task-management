import styles from "./styles.module.scss";

const CurrentDate = () => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const current = new Date();
  const date = `${month[current.getMonth()]} ${current.getDate()}, ${current.getFullYear()}`;

  return (
    <div className={styles.main}>
      <p>{date}</p>
    </div>
  );
};

export default CurrentDate;
