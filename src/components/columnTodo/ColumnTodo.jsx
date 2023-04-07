import { useDrop } from "react-dnd";
import TaskItem from "../taskItem/TaskItem";
import styles from "./styles.module.scss";

const ColumnTodo = ({ setTasks, tasks }) => {
  const filterProcessingTasks = tasks.filter((item) => {
    return item.status === "pending";
  });

  /* DRAG AND DROP */
  const addItemToSection = (id) => {
    setTasks((prev) => {
      const modTasks = prev.map((el) => {
        if (el.id == id) {
          return { ...el, status: "pending" };
        }
        return el;
      });

      localStorage.setItem("task-list", JSON.stringify(modTasks));
      return modTasks;
    });
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  /* -------------------- */

  return (
    <div className={styles.main} ref={drop}>
      <div>
        <h3>Pending</h3>
      </div>
      <div className={styles.content}>
        {filterProcessingTasks.map((task, index) => (
          <div key={index}>
            <TaskItem key={task.id} task={task} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnTodo;
