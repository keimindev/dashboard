import React from 'react';
import { 
    BrowserRouter as Router, 
    Link } from 'react-router-dom';
import User from './User';

const Home = () => {
    return (
        <>
        <div className="container">
         <ul className="home-category">
             <li><h2>강사관리 </h2> </li>
             <li><h5>총 강사 수: 0 </h5> </li>
         </ul>
         <ul className="branch">
            <li><Link to = "/add" className = "add-btn"> 강사추가 </Link></li>
            <li><h1>두써킷 정관점</h1></li>
         </ul>

        <User />
        </div> 
        </>
    )
}




export default Home;
