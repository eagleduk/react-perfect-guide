import React, { useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  if (action.type === "INPUT_ACTION") {
    return {
      value: action.value,
      isValid: action.value.includes("@"),
    };
  } else if (action.type === "BLUR_ACTION") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === "INPUT_ACTION") {
    return {
      value: action.value,
      isValid: action.value.trim().length > 6,
    };
  } else if (action.type === "BLUR_ACTION") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const Login = (props) => {
  const [reducerEmail, reducerEmailDispatch] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [reducerPassword, reducerPasswordDispatch] = useReducer(
    passwordReducer,
    {
      value: "",
      isValid: null,
    }
  );
  const [formIsValid, setFormIsValid] = useState(false);
  console.log(reducerPassword, reducerEmail);

  // useEffect(() => {
  //   // 종속성의 값이 변경될 때마다 state 를 변경하는 필요없는 동작을 하지 않기 위해 Timeout 으로 시간 차를 준다.
  //   let checkValid = setTimeout(() => {
  //     console.log("Start Validate");
  //     setFormIsValid(
  //       enteredEmail.includes("@") && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   // setTimeout 이 중첩되지 않게 useEffect 가 재 수행 될때 오래된 timeout 객체는 제거 한다.
  //   return () => {
  //     console.log("Clean up");
  //     clearTimeout(checkValid);
  //   };
  // }, [enteredEmail, enteredPassword]);
  const emailChangeHandler = (event) => {
    reducerEmailDispatch({ type: "INPUT_ACTION", value: event.target.value });
    // 이곳에서는 수정내용이 반영되지 않는다.
    // => 화면이 업데이트가 되어야 값 변경이 반영되는 듯.
    // => 같은 함수 내에 있어서 화면 업데이트가 되기 전에 유효성 검사가 진행 되고 화면 업데이트.
    setFormIsValid(reducerPassword.isValid && event.target.value.includes("@"));
  };

  const passwordChangeHandler = (event) => {
    reducerPasswordDispatch({
      type: "INPUT_ACTION",
      value: event.target.value,
    });
    // 이곳에서는 수정내용이 반영되지 않는다.
    // => 화면이 업데이트가 되어야 값 변경이 반영되는 듯.
    // => 같은 함수 내에 있어서 화면 업데이트가 되기 전에 유효성 검사가 진행 되고 화면 업데이트.
    setFormIsValid(
      event.target.value.trim().length > 6 && reducerEmail.isValid
    );
  };

  const validateEmailHandler = () => {
    reducerEmailDispatch({ type: "BLUR_ACTION" });
  };

  const validatePasswordHandler = () => {
    reducerPasswordDispatch({ type: "BLUR_ACTION" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(reducerEmail.value, reducerPassword.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            reducerEmail.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={reducerEmail.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            reducerPassword.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={reducerPassword.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
