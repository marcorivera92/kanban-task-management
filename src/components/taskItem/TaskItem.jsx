import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { deleteTask, processingTask, completedTask } from "../../store/appSlice";
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";
import styles from "./styles.module.scss";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  const handleProcessingTask = () => {
    dispatch(processingTask(task.id));
  };

  const handleCompletedTask = () => {
    dispatch(completedTask(task.id));
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      className={`${styles.main} ${
        (task.priority === "low" && styles.bg_low) ||
        (task.priority === "medium" && styles.bg_medium) ||
        (task.priority === "high" && styles.bg_high)
      }`}
      ref={drag}
    >
      <div className={styles.content}>
        {/* TITLE + DELETE */}
        <div className={styles.title}>
          <h3> {task.title} </h3>
          <button className={styles.btn_delete} onClick={() => handleDeleteTask()}>
            <HighlightOffOutlinedIcon />
          </button>
        </div>
        <div className={styles.description}>
          <p>{task.description}</p>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.date}>
          <p> {task.date} </p>
        </div>
        <div className={styles.commands}>
          <div
            className={`${styles.priority} ${
              (task.priority === "low" && styles.label_low) ||
              (task.priority === "medium" && styles.label_medium) ||
              (task.priority === "high" && styles.label_high)
            }`}
          >
            <p> {task.priority} </p>
          </div>
          <div className={styles.buttons}>
            <button
              className={`${styles.btn_process} ${
                task.status === "processing" && styles.task_processing
              }`}
              onClick={() => handleProcessingTask()}
            >
              <PendingActionsOutlinedIcon />
            </button>
            <button
              className={`${styles.btn_done} ${task.status === "done" && styles.task_completed}`}
              onClick={() => handleCompletedTask()}
            >
              <TaskAltOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
