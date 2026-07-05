import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { getDataFromApi } from "../utils/functions.js";

const Shop = () => {
  /*
    <></> - React fragment tagovi, sluze nam kao tagovi sa strukturu koda da ne bismo morali da koristimo divove svuda
    i da bi JSX hijerarhija koda bila zadovoljena.
    */

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getDataFromApi().then((res) => setPosts(res));
  }, [posts]);

  return (
    <>
      <Header />
      {posts.map((post) => (
        <div>
          <p class='title'>{post.title}</p>
          <p class='description'>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default Shop;
