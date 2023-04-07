import { useState } from "react";
import { addTask } from "../../store/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import styles from "./styles.module.scss";

const Newtask = ({ openModal, setOpenModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [status, setStatus] = useState("pending");

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setOpenModal(!openModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* DATE */
    let date = new Date().toLocaleString();
    const id = nanoid();
    dispatch(
      addTask({
        id,
        title,
        description,
        priority,
        date,
        status,
      })
    );

    setTitle("");
    setDescription("");
    setPriority("low");
    setStatus("pending");
    handleCloseModal();
  };

  return (
    <div className={styles.main}>
      <div className={styles.title_header}>
        <button className={styles.btn_arrow} onClick={() => handleCloseModal()}>
          <KeyboardBackspaceIcon />
        </button>
        <h2>Create New Task </h2>
      </div>

      <div className={styles.content}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.title}>
            <h3>Task Title</h3>
            <input
              type="text"
              id="title"
              value={title}
              placeholder="Enter Task Title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className={styles.description}>
            <h3>Description</h3>
            <textarea
              type="textarea"
              maxLength={200}
              id="description"
              value={description}
              placeholder="Enter Task Description (Optional)"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className={styles.priority}>
            <h3>Priority</h3>

            <div className={styles.switch_field}>
              <input
                type="radio"
                id="radio-one"
                name="switch"
                value="low"
                onChange={(e) => setPriority(e.target.value)}
              />
              <label
                htmlFor="radio-one"
                className={`${styles.input_priority} ${priority == "low" && styles.priority_low}`}
              >
                Low
              </label>
              <input
                type="radio"
                id="radio-two"
                name="switch"
                value="medium"
                onChange={(e) => setPriority(e.target.value)}
              />
              <label
                htmlFor="radio-two"
                className={`${styles.input_priority} ${
                  priority == "medium" && styles.priority_medium
                }`}
              >
                Medium
              </label>
              <input
                type="radio"
                id="radio-three"
                name="switch"
                value="high"
                onChange={(e) => setPriority(e.target.value)}
              />
              <label
                htmlFor="radio-three"
                className={`${styles.input_priority} ${priority == "high" && styles.priority_high}`}
              >
                High
              </label>
            </div>
          </div>
          <button type="submit">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Newtask;
