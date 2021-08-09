import React from 'react'
import Users from './UserData'
import NewPerson from '../components/NewPerson';


const User = () => {
 return (
    <>
    <div className="nav">
      <ul>
        <li><input type="text" placeholder="name"></input></li>
        <li><input type="text" placeholder="mobile"></input></li>
        <li className="search-btn">Search</li>
        <li className="reset-btn">Reset</li>
      </ul>
</div>
    <div className="user-table">
        <ul className="user-table-menu">
            <li>이름</li>
            <li>연락처</li>
            <li>E-mail</li>
            <li>등록일</li>
        </ul>
        <NewPerson/>
        <Users />
        </div>
    </>
    )

}


export default User