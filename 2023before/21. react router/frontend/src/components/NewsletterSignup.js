import { useFetcher } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";
import { useEffect } from "react";

function NewsletterSignup() {
  const fetch = useFetcher();

  useEffect(() => {
    if (fetch.state === "idle" && fetch.data && fetch.data.message)
      window.alert(fetch.data.message);
  }, [fetch.state, fetch.data]);

  return (
    <fetch.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetch.Form>
  );
}

export default NewsletterSignup;
