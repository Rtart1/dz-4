import React, { useState } from "react";
import MainPage from "../../pages/mainPage/MainPage";
import ErrorPage from "../../pages/errorPage/ErrorPage";

const Access = () => {
  const [user, setUser] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);

  if (!user) {
    const name = prompt("Как вас зовут?");
    const lastname = prompt("Какая у вас фамилия?");
    const newUser = { name, lastname };

    setUser(newUser);

    if (name === "John" && lastname === "Johns") {
      setIsAuthorized(true);
    }
  }

  return isAuthorized ? <MainPage user={user} /> : <ErrorPage user={user} />;
};

export default Access;
