import { useState } from "react";

export function InvisibleFieldform() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(username, password);
      }}
    >
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          style={{ display: "none" }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          id="actualUsernameField"
          name="actualUsernameField"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          style={{ display: "none" }}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          id="actualPasswordField"
          name="actualPasswordField"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
