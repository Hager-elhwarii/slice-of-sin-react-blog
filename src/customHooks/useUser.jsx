import { useState } from "react";

export default function useUser() {
  const getUser = () => {
    const loggedUser = localStorage.getItem("user");
    const user = JSON.parse(loggedUser);
    return user;
  };

  const saveUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const [user, setUser] = useState(getUser);

  //console.log({ user });
  return {
    user,
    setUser: saveUser,
  };
}
