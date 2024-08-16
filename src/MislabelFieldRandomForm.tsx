import { useState } from "react";

export function MislabelFieldRandomForm() {
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
        <label htmlFor="totallyRandom">Username: </label>
        <input
          type="text"
          id="totallyRandom"
          name="totallyRandom"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="totallyRandomTwo">Password: </label>
        <input
          type="password"
          id="totallyRandomTwo"
          name="totallyRandomTwo"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
