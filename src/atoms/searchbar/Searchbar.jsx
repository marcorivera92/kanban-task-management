import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import styles from "./styles.module.scss";

const Searchbar = ({ searchValue, setSearchValue }) => {
  const handleSearch = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  return (
    <div className={styles.main}>
      <SearchOutlinedIcon />
      <form className={styles.searchbar}>
        <input
          type="text"
          placeholder="Search task here"
          onChange={(e) => handleSearch(e)}
          value={searchValue}
        />
      </form>
    </div>
  );
};

export default Searchbar;
