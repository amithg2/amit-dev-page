import React, { useState } from "react";
import Group from "./Group";
import './Groups.css'

function Groups(props) {
  const [count, setCounter] = useState(0);
  const [countGropus, setCountGropus] = useState(0);
  const [runPage, setRunPage] = useState(false)
  setTimeout(() => {
    let counter = 0;
    let groupsTotal = 0;
    const arr = props.groups;
    for (let cell of arr) {
      groupsTotal++;
      for (let member of cell) {
        counter++;
      }
    }
    setCounter(counter);
    setCountGropus(groupsTotal);
    setRunPage(true)    
  }, 3000);

const showAllGroups =() => {
    const newArr = props.groups.map((e, i) => {
        return <Group data={e} key ={i}/>
    })
    return newArr
}

  if(runPage){
    return (
        <div >
            <h1>Project Entrepreneurship Groups:</h1>
            <p>{count} members in {countGropus} groups </p>
          <div className='allGroups'>
            {showAllGroups()}
          </div>
        </div>
      );
  } else {
      return <h1>Building Groups...</h1>
  }
  
}

export default Groups;
