import React, {useState} from 'react';
import { Router, Link } from 'react-router-dom';
import { dbService }from '../firebase';


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


    const onChange = (event) => {
      const {target: {value},} = event;
      setName(value);
    };

    const onChange1 = (event) => {
      const {target: {value},} = event;
      setMobile(value);
    };

    const onChange2 = (event) => {
      const {target: {value},} = event;
      setEmail(value);
    };

    const backToList = () =>{
      Router.push("/");
    }

    return(
      <>
      <div className="container">
      <h2 className="title">회원 관리</h2>
      <div><Link to = "/board" className="list-btn"> 회원 목록</Link></div>
      <ul className="table">
        <li className="category">
          <ul>
            <li>가맹점</li>
            <li>회원명</li>
            <li>휴대전화</li>
            <li>E-mail</li>
          </ul>
        </li>
        <li className="info">
          <ul>
            <li>강남점</li>
            <li><input value={Name} onChange={onChange} type="text" placeholder="Name" className ="text"/></li>
            <li><input value={Mobile} onChange={onChange1}type="text" placeholder="Mobile" className ="mobile" /></li>
            <li><input value={Email} onChange={onChange2}type="text" placeholder="123@example.com" className ="email" /></li>
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