import React from 'react';
import { MdOutlineLocationOn, MdModeEdit } from 'react-icons/md';
import logo from '../asserst/Group 42.png'

const YourComponent = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <span className="me-2">
        <MdOutlineLocationOn />
      </span>
      <span>Noida, India</span>

      <hr className="mx-2" />

      <span className="ms-2">
        <MdModeEdit />
      </span>

    
    </div>
  );
};

export default YourComponent;
