import React,{useState,useEffect} from "react";
import { db } from "./firebase-config";
import { addDoc, collection, getDoc, doc } from "firebase/firestore";

const DataFromFirebase = ({users})=>{

  const [searchValue, setSearchValue] = useState("");
  const [values, setValues] = useState([]); 
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    addDoc(usersCollectionRef, { user: users });
  }, []);

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, "users", "VPviCybqN5dK4hWDJ4t9");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
      setValues(docSnap.data());
    };
    getData();
  }, []);

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const handleUrlChange = () => {
    window.history.pushState({}, "search", searchValue);
  };

  useEffect(() => {
    if (searchValue != "") {
      handleUrlChange();
    }
  }, [searchValue]);
  
  return (
    <>
      <div className="data-from-firebase">
        <div>
          <div className="input-container">
            <input
              className="input2"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search..."
            />
            <button onClick={handleInputChange}>Refresh</button>
          </div>
          <ul>
            <h3>Users from firebase</h3>
            {values?.user
              ?.filter((user) => user.match(new RegExp(searchValue, "i")))
              .map((user, index) => {
                return <li key={index}>{user}</li>;
              })}
            {(users = " " ? "No user found" : {users})}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DataFromFirebase;