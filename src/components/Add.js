import React, {useState, useEffect} from 'react';
import { dbService, storageService }from '../firebase';
import './Add.css';

const AddPerson = (() => {
    const [Name, setName] = useState("");
    const [Names, setNames] = useState([]);
    //name 가져오기

    useEffect( () => {
       //realtime 유동은 onSnapshot으로 ~
       dbService.collection("names").onSnapshot( (snapshot) => {
          const nameArray = snapshot.docs.map( doc => ({id:doc.id, ...doc.data(),
          }))
          setNames(nameArray)
       })
    }, [])

    const onSubmit = async (event) => {
      event.preventDefault();
      //firebase.firestorage.doc에서 정보 찾아서 넣기
      await dbService.collection("names").add({
        //collction key
        Name,
        createdAt: Date.now(),
      });
      setName("");

    };
    const onChange = (event) => {
      const {target: {value}, } = event;
      setName(value);
    };
    return(
      <>
      <div className="container">
      <h2 className="title">강사관리</h2>
      <ul className="table">
        <li className="category">
          <ul>
            <li>가맹점</li>
            <li>강사명</li>
            <li>휴대전화</li>
          </ul>
        </li>
        <li className="info">
          <ul>
            <li>두서킷 정관점</li>
            <li><input value={Name} onChange={onChange} type="text" placeholder="name" className ="text"/></li>
            <li><input type="text" className ="mobile"></input></li>
          </ul>
        </li>
      </ul>
      <div className="button">
        <form onSubmit={onSubmit}>
        <input type="submit" className="btn" value="Add" />
        </form>
      </div>
      <div>
          {Names.map( name => 
            <div key={name.id}>
              <h4>{name.Name}</h4>
            </div>)}
        </div>
      </div>
      </>
    )
  });
  


export default AddPerson;