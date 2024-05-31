import React, { useState, useEffect } from "react";
import Navbar from "./Componnet/Navbar.jsx";
import Modal from "./Componnet/Modal.jsx";
import { Outlet } from "react-router-dom";
function App() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    // Show modal on page load
    setShowModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // if You want onec popup

  // const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   const hasCancelled = localStorage.getItem('hasCancelled');
  //   if (!hasCancelled) {
  //     setShowModal(true);
  //   }
  // }, []);

  // const handleCloseModal = () => {
  //   setShowModal(false);
  //   localStorage.setItem('hasCancelled', 'true');
  // };

  return (
    <>
      <Navbar />
      <Modal show={showModal} handleClose={handleCloseModal} />
      <Outlet />
    </>
  );
}

export default App;
