import React, { useEffect, useState } from "react";

const index = () => {
  const [comments, setComments] = useState([]);
  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/api/comments");
    const data = await res.json();
    setComments(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const DeleteComment = async (id) => {
    const res = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    fetchData();
  };
  return (
    <div>
      {comments.map((c) => {
        return (
          <>
            <h1 key={c.id}>{c.text}</h1>
            <button onClick={() => DeleteComment(c.id)}>Delete</button>
          </>
        );
      })}
    </div>
  );
};

export default index;
