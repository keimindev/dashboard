import React from 'react';
import { Link } from 'react-router-dom';
import User from '../Data/Userdata';
import { authService, dbService } from '../firebase';


const Home = () => {
    const handleLogout = () => authService.signOut();

    return (
        <>
        <div className="logout-form">
            <span>Welcome</span>
            <span onClick={handleLogout} className="logout-btn">Log out</span>
        </div>
        <div className="container">
         <ul className="home-category">
             <li><h2>Management</h2></li>
         </ul>
         <ul className="branch">
            <li><Link to = "/add" className = "add-btn"> Add New Member </Link></li>
            <li><h1>Fit Gym</h1></li>
         </ul>

        <User />
        </div> 
        </>
    )
}




export default Home;
