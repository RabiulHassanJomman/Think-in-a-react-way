import { useEffect, useState } from "react";

export default function GetPost() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setPost(json);
        setError("");
      })
      .catch(() => {
        setLoading(false);
        setPost("");
        setError("there was a problem!");
      }); 
  });

  return (
    <div>
      <h1>{loading ? "Loading" : post.title}</h1>
      <p>{error ? error : null}</p>
    </div>
  );
}
