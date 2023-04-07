import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CurrentDate from "../../atoms/currentDate/CurrentDate";
import TaskList from "../taskList/TaskList";
import ColumnTodo from "../columnTodo/ColumnTodo";
import ColumnProgress from "../columnProgress/ColumnProgress";
import ColumnCompleted from "../columnCompleted/ColumnCompleted";
import Searchbar from "../../atoms/searchbar/Searchbar";
import styles from "./styles.module.scss";

const Main = () => {
  const { taskList } = useSelector((state) => state.app);
  const [tasks, setTasks] = useState(taskList);
  const [filteredTasks, setFilteredTasks] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  /* RENDER TASKS BASED ON STATUS */
  useEffect(() => {
    if (filteredTasks === "all") {
      setTasks(taskList);
    } else {
      const filtered = taskList.filter((item) => {
        return item.status === filteredTasks || item.status.includes(filteredTasks);
      });
      setTasks(filtered);
    }
  }, [filteredTasks]);
  /* --------------------- */

  const handleSetCategory = (e) => {
    let category = e.target.value;
    setFilteredTasks(category);
  };

  /* SEARCHBAR */
  const filterSearch = () => {
    if (searchValue === "") {
      setTasks(taskList);
    } else {
      const updateSearch = taskList.filter((item) =>
        item.title.toLowerCase().includes(searchValue)
      );
      setTasks(updateSearch);
    }
  };

  useEffect(() => {
    filterSearch();
  }, [searchValue]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.main}>
        <div className={styles.title}>
          <h2>
            MANAGE <br /> YOUR TASKS
          </h2>
        </div>
        <div className={styles.widget}>
          <CurrentDate />

          <div className={styles.searchbar}>
            <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
          {/* BUTTONS */}
          <div className={styles.buttons}>
            <button
              className={`${styles.btn_el} ${filteredTasks === "all" ? styles.active_btn : ""}`}
              value="all"
              onClick={handleSetCategory}
            >
              View All
            </button>
            <button
              className={`${styles.btn_el} ${
                filteredTasks === "processing" ? styles.active_btn : ""
              }`}
              value="processing"
              onClick={handleSetCategory}
            >
              Processing
            </button>
            <button
              className={`${styles.btn_el} ${filteredTasks === "done" ? styles.active_btn : ""}`}
              value="done"
              onClick={handleSetCategory}
            >
              Completed
            </button>
          </div>
          {/* ------------ */}
        </div>
        <div className={styles.hero}>
          {taskList.length > 0 ? (
            <>
              <TaskList tasks={tasks} setTasks={setTasks} />
              {/* DESKTOP GRID */}
              <ColumnTodo setTasks={setTasks} tasks={taskList} />
              <ColumnProgress setTasks={setTasks} tasks={taskList} />
              <ColumnCompleted setTasks={setTasks} tasks={taskList} />
            </>
          ) : (
            <p className={styles.error_message}> No results found for "{searchValue}" </p>
          )}
        </div>
      </div>
    </DndProvider>
  );
};

export default Main;
