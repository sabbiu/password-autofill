import { useState } from "react";
import { NormalForm } from "./NormalForm";
import NormalFormCode from "./NormalForm.tsx?raw";
import { AutocompleteOffForm } from "./AutocompleteOffForm";
import AutoCompleteOffFormCode from "./AutocompleteOffForm.tsx?raw";
import { AutocompleteNewPasswordForm } from "./AutocompleteNewPasswordForm";
import AutocompleteNewPasswordFormCode from "./AutocompleteNewPasswordForm.tsx?raw";
import { ChangePwFieldType } from "./ChangePwFieldType";
import ChangePwFieldTypeFormCode from "./ChangePwFieldType.tsx?raw";
import { MislabelFieldForm } from "./MislabelFieldForm";
import MislabelFieldFormCode from "./MislabelFieldForm.tsx?raw";
import { MislabelFieldRandomForm } from "./MislabelFieldRandomForm";
import MislabelFieldRandomFormCode from "./MislabelFieldRandomForm.tsx?raw";
import { InvisibleFieldform } from "./InvisibleFieldForm";
import InvisibleFieldFormCode from "./InvisibleFieldForm.tsx?raw";
import { ReadonlyFieldForm } from "./ReadonlyFieldForm";
import ReadonlyFieldFormCode from "./ReadonlyFieldForm.tsx?raw";
import { PasswordAsTextForm } from "./PasswordAsText";
import PasswordAsTextFormCode from "./PasswordAsText.tsx?raw";
import { PasswordAsTextWithDisguisedInputForm } from "./PasswordAsTextWithDisguisedInput";
import PasswordAsTextWithDisguisedInputFormCode from "./PasswordAsTextWithDisguisedInput.tsx?raw";
import { OnlyDisguisedForm } from "./OnlyDisguised";
import OnlyDisguisedFormCode from "./OnlyDisguised.tsx?raw";
import { EverythingDisguisedForm } from "./EverythingDisguised";
import EverythingDisguisedFormCode from "./EverythingDisguised.tsx?raw";
import { AutocompleteOffPasswordManagerForm } from "./AutocompleteOffPasswordManager";
import AutocompleteOffPasswordManagerFormCode from "./AutocompleteOffPasswordManager.tsx?raw";
import { EverythingDisguisedWithPwMgrSettingsForm } from "./EverythingDisguisedWithPwMgr";
import EverythingDisguisedWithPwMgrSettingsFormCode from "./EverythingDisguisedWithPwMgr.tsx?raw";

enum Approach {
  NORMAL_FORM = "Normal Form",
  AUTOCOMPLETE_OFF = 'autocomplete="off"',
  AUTOCOMPLETE_NEW_PASSWORD = 'autocomplete="new-password"',
  AUTOCOMPLETE_OFF_PW_MANAGER = "Password Manager specific autocomplete settings",
  CHANGE_PASSWORD_FIELD_TYPE = "Password Field Delay",
  MISLABEL_FIELD = "Mislabel Field",
  MISLABEL_FIELD_RANDOM = "Mislabel Field Random",
  INVISIBLE_FIELD = "Invisible Field",
  READONLY_FIELD = "Readonly Field",
  PASSWORD_AS_TEXT = "Password as Text",
  PASSWORD_AS_TEXT_WITH_DISGUISED_INPUT = "Password as Text; Disguised Username",
  ONLY_DISGUISED = "Only Disguised Username and Password",
  EVERYTHING_DISGUISED = "Disguised Username and Password; Password as Text",
  EVERYTHING_DISGUISED_WITH_PW_MGR = "Disguised Username and Password; Password as Text; Password Manager specific settings",
}

const useLocalStorageState = (key: string, state: string | null) => {
  const [value, setValue] = useState(localStorage.getItem(key) || state);

  const setLocalStorageValue = (newValue: string | null) => {
    setValue(newValue);
    if (newValue === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, newValue);
    }
  };

  return [value, setLocalStorageValue] as const;
};

function App() {
  const [isLogged, setIsLogged] = useLocalStorageState("logged-in", "false");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedApproach, setSelectedApproach] = useLocalStorageState(
    "approach",
    null
  );

  if (isLogged === "false")
    return (
      <>
        <h1>First of all, Login</h1>
        <p>This is so that browser can save some password</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setUsername("");
            setPassword("");
            setIsLogged("true");
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
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </>
    );

  if (isLogged) {
    const tests = [
      {
        approach: Approach.NORMAL_FORM,
        description: "Basic form",
        chrome: "❌",
        lastpass: "❌",
        bitwarden: "❌",
      },
      {
        approach: Approach.AUTOCOMPLETE_OFF,
        description: 'Form with autocomplete="off" property',
        chrome: "❌",
        lastpass: "❌",
        bitwarden: "❌",
      },
      {
        approach: Approach.AUTOCOMPLETE_NEW_PASSWORD,
        description: 'Form with autocomplete="new-password" property',
        chrome: "✅",
        lastpass: "❌",
        bitwarden: "✅",
      },
      {
        approach: Approach.AUTOCOMPLETE_OFF_PW_MANAGER,
        description: "Password Manager specific autocomplete off settings",
        chrome: "❌",
        lastpass: "❌",
        bitwarden: "✅",
      },
      {
        approach: Approach.CHANGE_PASSWORD_FIELD_TYPE,
        description:
          "Initially password field is text and then changes to password after certain time",
        chrome: "✅ When timeout >= 100ms",
        lastpass: "❌",
        bitwarden: "❌",
      },
      {
        approach: Approach.MISLABEL_FIELD,
        description:
          "Mislabel username to notAUsername and password to notAPassword",
        chrome: "❌",
        lastpass: "❌",
        bitwarden: "❌",
      },
      {
        approach: Approach.MISLABEL_FIELD_RANDOM,
        description: "Mislabel field with some random name",
        chrome: "❌",
        lastpass: "❌",
        bitwarden: "❌",
      },
      {
        approach: Approach.INVISIBLE_FIELD,
        description: "Also add a invisible field",
        chrome: "❌",
        lastpass: "✅ (Shows lastpass icon)",
        bitwarden: "❌",
      },
      {
        approach: Approach.READONLY_FIELD,
        description:
          "Readonly field initially, and when focus, it becomes editable",
        chrome: "✅",
        lastpass: "❌",
        bitwarden: "❌",
      },
      {
        approach: Approach.PASSWORD_AS_TEXT,
        description:
          "Password input is of type text. Uses `text-security` font",
        chrome: "✅",
        lastpass: "❌",
        bitwarden: "❌",
      },
      {
        approach: Approach.PASSWORD_AS_TEXT_WITH_DISGUISED_INPUT,
        description: "Password as text with disguised username input",
        chrome: "✅",
        lastpass: "✅ (Shows lastpass icon)",
        bitwarden: "❌",
      },
      {
        approach: Approach.ONLY_DISGUISED,
        description: "Only disguised but password is of type password",
        chrome: "❌",
        lastpass: "✅ (Shows lastpass icon)",
        bitwarden: "❌",
      },
      {
        approach: Approach.EVERYTHING_DISGUISED,
        description:
          "Both username and password are disguised. Also, password is of type text",
        chrome: "✅",
        lastpass: "✅",
        bitwarden: "❌",
      },
      {
        approach: Approach.EVERYTHING_DISGUISED_WITH_PW_MGR,
        description:
          "Both username and password are disguised. Also, password is of type text. Password Manager specific settings",
        chrome: "✅",
        lastpass: "✅",
        bitwarden: "✅",
      },
    ];

    return (
      <>
        <h1>
          Welcome, User!{" "}
          <button onClick={() => setIsLogged("false")}>Logout</button>
        </h1>

        <p>
          Testing various scenarios where we do not want browswers / password
          managers to autofill the username or password.
        </p>
        <p>
          ✅ represents that the password maanger is not autofilling which is
          what we want.
        </p>
        <p>
          ❌ represents that the password manager is doing the autofill, which
          we are trying to ignore.
        </p>

        <table>
          <thead>
            <tr>
              <th>Approach</th>
              <th>Description</th>
              <th>Chrome</th>
              <th>Lastpass</th>
              <th>Bitwarden</th>
              <th>Test</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((test) => (
              <tr>
                <td>{test.approach}</td>
                <td>{test.description}</td>
                <td>{test.chrome}</td>
                <td>{test.lastpass}</td>
                <td>{test.bitwarden}</td>
                <td>
                  <button onClick={() => setSelectedApproach(test.approach)}>
                    Test
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ paddingTop: "10px", display: "flex" }}>
          <div style={{ width: "400px" }}>
            {selectedApproach && (
              <>
                {selectedApproach}{" "}
                <button onClick={() => setSelectedApproach(null)}>Hide</button>
              </>
            )}
            {selectedApproach === Approach.NORMAL_FORM && <NormalForm />}
            {selectedApproach === Approach.AUTOCOMPLETE_OFF && (
              <AutocompleteOffForm />
            )}
            {selectedApproach === Approach.AUTOCOMPLETE_NEW_PASSWORD && (
              <AutocompleteNewPasswordForm />
            )}
            {selectedApproach === Approach.AUTOCOMPLETE_OFF_PW_MANAGER && (
              <AutocompleteOffPasswordManagerForm />
            )}
            {selectedApproach === Approach.CHANGE_PASSWORD_FIELD_TYPE && (
              <ChangePwFieldType />
            )}
            {selectedApproach === Approach.MISLABEL_FIELD && (
              <MislabelFieldForm />
            )}
            {selectedApproach === Approach.MISLABEL_FIELD_RANDOM && (
              <MislabelFieldRandomForm />
            )}
            {selectedApproach === Approach.INVISIBLE_FIELD && (
              <InvisibleFieldform />
            )}
            {selectedApproach === Approach.READONLY_FIELD && (
              <ReadonlyFieldForm />
            )}
            {selectedApproach === Approach.PASSWORD_AS_TEXT && (
              <PasswordAsTextForm />
            )}
            {selectedApproach ===
              Approach.PASSWORD_AS_TEXT_WITH_DISGUISED_INPUT && (
              <PasswordAsTextWithDisguisedInputForm />
            )}
            {selectedApproach === Approach.ONLY_DISGUISED && (
              <OnlyDisguisedForm />
            )}
            {selectedApproach === Approach.EVERYTHING_DISGUISED && (
              <EverythingDisguisedForm />
            )}
            {selectedApproach === Approach.EVERYTHING_DISGUISED_WITH_PW_MGR && (
              <EverythingDisguisedWithPwMgrSettingsForm />
            )}
          </div>
          {selectedApproach && (
            <div style={{ border: "1px solid grey", padding: "10px" }}>
              <pre>
                {selectedApproach === Approach.NORMAL_FORM && NormalFormCode}
                {selectedApproach === Approach.AUTOCOMPLETE_OFF &&
                  AutoCompleteOffFormCode}
                {selectedApproach === Approach.AUTOCOMPLETE_NEW_PASSWORD &&
                  AutocompleteNewPasswordFormCode}
                {selectedApproach === Approach.AUTOCOMPLETE_OFF_PW_MANAGER &&
                  AutocompleteOffPasswordManagerFormCode}
                {selectedApproach === Approach.CHANGE_PASSWORD_FIELD_TYPE &&
                  ChangePwFieldTypeFormCode}
                {selectedApproach === Approach.MISLABEL_FIELD &&
                  MislabelFieldFormCode}
                {selectedApproach === Approach.MISLABEL_FIELD_RANDOM &&
                  MislabelFieldRandomFormCode}
                {selectedApproach === Approach.INVISIBLE_FIELD &&
                  InvisibleFieldFormCode}
                {selectedApproach === Approach.READONLY_FIELD &&
                  ReadonlyFieldFormCode}
                {selectedApproach === Approach.PASSWORD_AS_TEXT &&
                  PasswordAsTextFormCode}
                {selectedApproach ===
                  Approach.PASSWORD_AS_TEXT_WITH_DISGUISED_INPUT &&
                  PasswordAsTextWithDisguisedInputFormCode}
                {selectedApproach === Approach.ONLY_DISGUISED &&
                  OnlyDisguisedFormCode}
                {selectedApproach === Approach.EVERYTHING_DISGUISED &&
                  EverythingDisguisedFormCode}
                {selectedApproach ===
                  Approach.EVERYTHING_DISGUISED_WITH_PW_MGR &&
                  EverythingDisguisedWithPwMgrSettingsFormCode}
              </pre>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default App;
