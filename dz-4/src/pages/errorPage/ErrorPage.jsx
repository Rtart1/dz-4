import React, { useState, useEffect } from "react";
import styles from "./errorPage.module.css";

const ErrorPage = ({ user }) => {
  const [userData, setUserData] = useState({ name: "", lastname: "" });

  useEffect(() => {
    setUserData(user);
  }, [user]);

  return (
    <div className={styles.error}>
      <h1>
        Тебе сюда нельзя - {userData.name} {userData.lastname}
      </h1>
    </div>
  );
};

export default ErrorPage;
