import React from "react";
import styles from "./Login.module.css";

const classes = {
  icon: {
    padding: '10px',
    minWidth: '40px',
    position: 'absolute'
  }
}

const Login = () => {
  return (
    <div className={styles["background"]}>
      <div className={styles["main-container"]}>
        <div className={styles['header']}>
          <h1>LOGIN</h1>
        </div>
        <div>
          <form>
            <i className={'fa fa-user'} styles={classes.icon}></i>
            <input type='text' className={styles['input-field']}></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
