import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";
import { useState } from "react";

function App() {
  
  return (
    
    <main className="d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
      <StarRating />
      <button
        className="btn btn-primary rounded-pill fixed-bottom modal-btn"
        data-bs-toggle="modal"
        data-bs-target="#modal"
      >
        Open Dialog
      </button>
      <Dialog />
    </main>
    
    
    
    
      
    
  );
}

export default App;
