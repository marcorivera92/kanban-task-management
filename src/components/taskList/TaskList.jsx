import TaskItem from "../taskItem/TaskItem";
import styles from "./styles.module.scss";

const TaskList = ({ tasks, setTasks }) => {
  return (
    <div className={styles.main}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </div>
  );
};

export default TaskList;
