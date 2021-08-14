import React, {useState} from 'react'
import Users from './UserData'
import NewPerson from '../components/NewPerson';


const User = () => {
  //search name
  const [search, setSearch] = useState("");
  const searchName = (e) =>{
    console.log(e.target.value)
    setSearch(e.target.value)
  }

 
  return (
    <>
    <div className="nav">
      <ul>
        <li><input type="text" placeholder="Search name or mobile" onChange={searchName} /></li>
      </ul>
</div>
    <div className="user-table">
        <ul className="user-table-menu">
            <li>No.</li>
            <li>이름</li>
            <li>연락처</li>
            <li>E-mail</li>
            <li>등록일</li>
            <li>비고</li>
        </ul>


        <Users />
        <NewPerson val={search}/>
        </div>
    </>
    )

}


export default User