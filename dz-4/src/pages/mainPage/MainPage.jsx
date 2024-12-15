import React, { useState, useEffect } from "react";
import styles from "./mainPage.module.css";

const MainPage = ({ user }) => {
  const [userData, setUserData] = useState({ name: "", lastname: "" });

  useEffect(() => {
    setUserData(user);
  }, [user]);

  return (
    <div className={styles.main}>
      <h1>
        Добро пожаловать {userData.name} {userData.lastname}, мы тебя ждали
      </h1>
    </div>
  );
};

export default MainPage;
