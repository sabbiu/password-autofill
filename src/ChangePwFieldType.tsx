import { useEffect, useState } from "react";

export function ChangePwFieldType() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordFieldType, setPasswordFieldType] = useState("text");

  useEffect(() => {
    setTimeout(() => {
      setPasswordFieldType("password");
    }, 100);
  }, []);

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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type={passwordFieldType}
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
