import { Form, useSearchParams, Link, json, redirect } from "react-router-dom";

import classes from "./AuthForm.module.css";
import { getToken } from "../util/auth";

function AuthForm() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;

export async function action({ request }) {
  const params = new URL(request.url).searchParams;
  const mode = params.get("mode");
  const formData = await request.formData();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Error" }, { status: response.status });
  }

  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem("token", token);
  localStorage.setItem("date", Date.now());

  return redirect("/");
}

export function loader() {
  const token = getToken();

  if (!token) return redirect("/auth?mode=signup");

  return null;
}
