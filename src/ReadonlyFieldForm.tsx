import { useState } from "react";

export function ReadonlyFieldForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameReadOnly, setUsernameReadOnly] = useState(true);
  const [passwordReadOnly, setPasswordReadOnly] = useState(true);

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
          name="username"
          readOnly={usernameReadOnly}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onFocus={() => setUsernameReadOnly(false)}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          readOnly={passwordReadOnly}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setPasswordReadOnly(false)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
