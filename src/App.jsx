import { useState } from "react";
import MainLayout from "./layout/MainLayout";
import Newtask from "./components/newTask/NewTask";
import "./App.css";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      {/* MODAL */}
      {openModal && <Newtask setOpenModal={setOpenModal} openModal={openModal} />}
      <MainLayout setOpenModal={setOpenModal} openModal={openModal} />
    </div>
  );
}

export default App;
