const initialState = {
  taskList: JSON.parse(localStorage.getItem("task-list")) || [],
  filter: "",
  openModal: false,
};

export default initialState;
