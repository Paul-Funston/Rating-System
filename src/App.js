import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";
import { useState } from "react";

function App() {
  const [isModalOn, setIsModalOn] = useState(false);

  const closeModal = () => {
    setIsModalOn(false);
  }

  const openModal = () => {
    setIsModalOn(true);
  }
  
  return (
    <main className="d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
      <StarRating />
      <button
        className="btn btn-primary rounded-pill fixed-bottom modal-btn"
        onClick={openModal}
        //data-bs-toggle="modal"
        //data-bs-target="#modal"
      >
        Open Dialog
      </button>
      <Dialog 
        active = {isModalOn}
        onClose = {closeModal}
      />
    </main>
  );
}

export default App;
