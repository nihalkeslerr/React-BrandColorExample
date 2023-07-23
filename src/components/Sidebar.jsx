import React from "react";
import Modal from 'react-modal';
import { useState } from "react";
import ReactDOM from 'react-dom';
import {GrClose} from "react-icons/gr";
function Sidebar() {
    const [modalIsOpen,setModalIsOpen] = useState(false);

    const toggleModal =()=>{
        setModalIsOpen(!modalIsOpen);
    }

  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <a href="#">
            Brand<b>Colors</b>
          </a>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum
          eaque perferendis natus eos labore ut illum explicabo!
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a onClick={toggleModal}>About Brand Colors</a>
            </li>
          </ul>
        </nav>
      </div>

      <Modal isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="about-modal"
        overlayClassName="about-modal-overlay"
      >
        <button className="modal-close-btn" onClick={toggleModal}>
        <GrClose/>
        </button>
        <h3>About BrandColor</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias laborum quis labore excepturi, magnam consequatur iure culpa esse explicabo. Quod nesciunt natus eveniet veniam, quibusdam porro qui ex sit.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolor asperiores fuga repudiandae doloremque dignissimos tempore a libero quia natus, nesciunt corrupti eos, error beatae nihil tenetur, aperiam illo culpa!</p>
      </Modal>
    </>
  );
}

export default Sidebar;
