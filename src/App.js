import React, { useState, useEffect } from "react";
function App() {
  let [data, setdata] = useState();
  let [val, setval] = useState();
  useEffect(() => {
    const result = localStorage.getItem("mydata");
    if (result) {
      setdata(result);
    }
  }, []);

  let handleclick = (e) => {
    setval(e.target.value);
  };

  let submitdata = () => {
    localStorage.setItem("mydata", val);
    setdata(val);
    setval("");
  };
  let deletedata = () => {
    // localStorage.clear('mydata')
    localStorage.removeItem("mydata");
    setdata("");
  };
  return (
    <>
      <input type="text" name="name" placeholder="Enter your value:" onChange={handleclick}/>
      <br />
      <br />
      <button onClick={submitdata}>Add</button>
      &nbsp;&nbsp;
      <button onClick={deletedata}>Delete</button>
      <h3>value = {data ? <p>{data}</p> : <p>no data</p>}</h3>
    </>
  );
}

export default App;
