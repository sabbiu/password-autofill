import { useState } from "react";

export function AutocompleteNewPasswordForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      autoComplete="new-password"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(username, password);
      }}
    >
      <div>
        <label htmlFor="username">Username: </label>
        <input
          autoComplete="new-password"
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          autoComplete="new-password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
