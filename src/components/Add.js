import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { dbService, authService }from '../firebase';


const AddPerson = (() => {
    const [Name, setName] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Email, setEmail] = useState("");

    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const getMon = month<10 ? `0${month}` : month;
    const today = new Date().getDate();
    const getDay = today<10 ? `0${today}` : today;

    const onSubmit = async (event) => {
      event.preventDefault();
      //firebase.firestorage.doc에서 정보 찾아서 넣기
      await dbService.collection("names").add({
        //collction key
        Name,
        Mobile,
        Email,
        createdAt: `${year}-${getMon}-${getDay}`,
      });
      setName("");
      setMobile("");
      setEmail("");
      window.location.href="/"
    };


    const onChangeName = (event) => {
      const {target: {value},} = event;
      setName(value);
    };

    const onChangeMobile = (event) => {
      const {target: {value},} = event;
      setMobile(value);
    };

    const onChangeEmail = (event) => {
      const {target: {value},} = event;
      setEmail(value);
    };

    const handleLogout = () => {
      authService.signOut();
      window.location.href="/"
    }
    return(
      <>
      <div className="logout-form">
        <span>Welcome</span>
        <span onClick={handleLogout} className="logout-btn">Log out</span>
      </div>
      <div className="container">
      <h2 className="title">Management</h2>
      <div><Link to = "/" className="list-btn"> Member List</Link></div>
      <ul className="table">
        <li className="category">
          <ul>
            <li>Place</li>
            <li>Name</li>
            <li>Mobile</li>
            <li>E-mail</li>
          </ul>
        </li>
        <li className="info">
          <ul>
            <li>Fit Gym Seoul</li>
            <li><input value={Name} onChange={onChangeName} type="text" placeholder="Name" className ="text"/></li>
            <li><input value={Mobile} onChange={onChangeMobile}type="text" placeholder="Mobile" className ="mobile" /></li>
            <li><input value={Email} onChange={onChangeEmail}type="text" placeholder="123@example.com" className ="email" /></li>
          </ul>
        </li>
      </ul>
      <div className="button">
        <form onSubmit={onSubmit}>
        <input type="submit" className="btn" value="Add" />
        </form>
      </div>
      </div>
      </>
    )
  });
  


export default AddPerson;