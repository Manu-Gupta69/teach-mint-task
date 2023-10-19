import { useState, useEffect } from "react";
import { getPosts } from "../../network/lib/userResourceApiHandler";

const useGetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getPosts();
        setPosts(data);
        setIsLoading(false);
      } catch (err) {
        setError(err?.message || "Something went wrong");
        setIsLoading(false);
      }
    })();
  }, []);

  return { posts, isLoading, error };
};

export default useGetPosts;
