import React, { useEffect, useState } from "react";

const DataFromArray = ({ users }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleUrlChange = () => {
    window.history.pushState({}, "search", searchValue);
  };

  useEffect(() => {
    if (searchValue != "") {
      handleUrlChange();
    }
  }, [searchValue]);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="data-from-array">
      <div className="input-container">
        <input
          className="input1"
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Search..."
          name="search"
        />
        <button onClick={() => setSearchValue("")}>Refresh</button>
      </div>
      <ul>
        <h3>Users from DATASET array declared in VSC</h3>
        {users
          .filter((user) => user.match(new RegExp(searchValue, "i")))
          .map((user, index) => {
            return <li key={index}>{user}</li>;
          })}
        {(users = " " ? "No user found" : { users })}
      </ul>
    </div>
  );
};

export default DataFromArray;
