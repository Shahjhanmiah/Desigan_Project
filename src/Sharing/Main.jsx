import React from 'react';
import { Nav } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
           <Nav></Nav> 
           <Outlet></Outlet>
        </div>
    );
};

export default Main;