import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [btnId, btnIdSetter] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(err => {
        console.log(err);
      });
  }, [btnId]);

  const clickHandler = () => {
    btnIdSetter(id);
  };
  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      Post: {post.title}
      <button onClick={clickHandler}>Fetch Data</button>
      {/* <ul>
        {post.map(item => {
          return <li key={item.id}>{item.title} </li>;
        })}
      </ul> */}
    </div>
  );
}

export default DataFetching;
