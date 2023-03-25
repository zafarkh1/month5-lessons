import React, { useState, useEffect } from "react";

import axios from "axios";

const MyFun = () => {

  const [text, setText] = useState("posts");
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${text}`
      );
      setdata(response.data);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [text]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container">
        <button onClick={() => setText("posts")}>Posts</button>
        <button onClick={() => setText("users")}>Users</button>
        <button onClick={() => setText("comments")}>Comments</button>
        <p>{text}</p>
        <ul>
          {data.map((element) => (
            <li key={element.id}>{element.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MyFun;
