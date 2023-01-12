import { useState } from "react";

import { register } from "../../services/auth.service";
import style from "./styles.module.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    register(username, password, "user");

    console.log(username, password);
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.labelInput}>Username</label>
        <input
          className={style.input}
          name="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className={style.labelInput}>Password</label>
        <input
          className={style.input}
          name="password"
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={style.btn} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
