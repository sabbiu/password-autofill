import { useState } from "react";

export function EverythingDisguisedForm() {
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
        <label htmlFor="u-s-e-r-n-a-m-e">
          U&zwj;s&zwj;e&zwj;r&zwj;n&zwj;a&zwj;m&zwj;e&zwj;:
        </label>
        <input
          type="text"
          id="u-s-e-r-n-a-m-e"
          name="u-s-e-r-n-a-m-e"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="p-a-s-s-w-o-r-d">
          P&zwj;a&zwj;s&zwj;s&zwj;w&zwj;o&zwj;r&zwj;d:
        </label>
        <input
          type="text"
          style={{ fontFamily: "text-security-disc" }}
          id="p-a-s-s-w-o-r-d"
          name="p-a-s-s-w-o-r-d"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
