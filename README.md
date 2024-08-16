# Password Autofill

Link: https://sabbiu.github.io/password-autofill/

Explores various scenarios for form and checks the autofill behavior. The best working version is:

```tsx
import { useState } from "react";

export function EverythingDisguisedWithPwMgrSettingsForm() {
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
          data-lpignore="true"
          data-1p-ignore={true}
          data-form-type="other"
          data-bwignore={true}
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
```

Here,
- Labels are obfuscated by adding a [ZWJ character](https://en.wikipedia.org/wiki/Zero-width_joiner)
- `id` and `names` are obfuscated by adding hyphens.
- We also add various attributes provided by password managers, but lastpass does not seem to respect that

<img width="1214" alt="image" src="https://github.com/user-attachments/assets/9ef0bed6-6b9e-4aaa-8f0d-494a6e2aa31f">

### Attributes Provided By Password Managers To Prevent Autofill

Password Managers provide attribute to prevent them from autofilling the form. [Reference](https://www.stefanjudis.com/snippets/turn-off-password-managers/)

| PW manager | Turn off attribute         |
|------------|----------------------------|
| 1Password  | data-1p-ignore             |
| Lastpass   | data-lpignore="true"       |
| Dashlane   | data-form-type="other"     |
| Bitwarden  | data-bwignore              |
