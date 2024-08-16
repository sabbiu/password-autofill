import { useState } from "react";

export function AutocompleteOffPasswordManagerForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(username, password);
      }}
    >
      <div>
        <label htmlFor="username">Username: </label>
        <input
          autoComplete="off"
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          data-lpignore="true"
          data-1p-ignore={true}
          data-form-type="other"
          data-bwignore={true}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          autoComplete="off"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          data-lpignore="true"
          data-1p-ignore={true}
          data-form-type="other"
          data-bwignore={true}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
