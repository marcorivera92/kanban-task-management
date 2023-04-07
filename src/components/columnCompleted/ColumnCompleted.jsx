import { useDrop } from "react-dnd";
import TaskItem from "../taskItem/TaskItem";
import styles from "./styles.module.scss";

const ColumnCompleted = ({ setTasks, tasks }) => {
  const filterProcessingTasks = tasks.filter((item) => {
    return item.status === "done";
  });

  /* DRAG AND DROP */
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToSection = (id) => {
    setTasks((prev) => {
      const modTasks = prev.map((el) => {
        if (el.id == id) {
          return { ...el, status: "done" };
        }
        return el;
      });
      localStorage.setItem("task-list", JSON.stringify(modTasks));
      return modTasks;
    });
  };
  /* -------------------- */

  return (
    <div className={styles.main} ref={drop}>
      <div>
        <h3>Completed</h3>
      </div>

      <div className={styles.content}>
        {filterProcessingTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ColumnCompleted;
