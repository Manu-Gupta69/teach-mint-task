import { useState, useEffect } from "react";
import { getUsers } from "../../network/lib/userResourceApiHandler";

const useGetUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getUsers();
        setUsers(data);
        setIsLoading(false);
      } catch (err) {
        setError(err?.message || "Something went wrong");
        setIsLoading(false);
      }
    })();
  }, []);

  return { users, isLoading, error };
};

export default useGetUsers;
