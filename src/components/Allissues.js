import React, {useEffect, useState} from 'react'
import { collection, getDocs } from "firebase/firestore";
import {db} from "../firebase"

const Allissues = () => {
    const [issue, setIssue] = useState([]);
    const GetAllIssue = async () =>{
        
        const querySnapshot = await getDocs(collection(db, "cities"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});


    }
useEffect = (() =>{
   GetAllIssue();
},[])
  return (
    <div>
        <button onClick={GetAllIssue}>Get All Issue</button>

    </div>
  )
}

export default Allissues