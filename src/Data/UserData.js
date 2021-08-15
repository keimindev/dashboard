import React, {useState} from 'react'
import NewPerson from './NewPerson'



const User = () => {
  //search name
  const [search, setSearch] = useState("")
  const handleSearch = (e) =>{
   setSearch(e.target.value)
  }

  return (
    <>
    <div className="data-table">
    <div className="nav">
      <div>
        <input 
            type="text" 
            placeholder="Search name or mobile" 
            className="search"
            onChange={handleSearch}/>
      </div>
    </div>
    <div className="user-table">
        <ul className="user-table-menu">
            <li>Name</li>
            <li>Mobile</li>
            <li>E-mail</li>
            <li>Register</li>
            <li></li>
        </ul>
        <NewPerson search={search} setSearch={setSearch} />
        </div>
        </div>
    </>
    )

}


export default User