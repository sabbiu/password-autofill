import { useState } from "react";

export function MislabelFieldForm() {
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
        <label htmlFor="notAusername">Username: </label>
        <input
          type="text"
          id="notAusername"
          name="notAusername"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="notApassword">Password: </label>
        <input
          type="password"
          id="notApassword"
          name="notApassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
