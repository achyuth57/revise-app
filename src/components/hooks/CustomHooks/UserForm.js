import React from "react";
import useInput from "./useInput";

function UserForm() {
  const [firstName, bindfirstName, resetfirstName] = useInput("");
  const [lastName, bindlastName, resetlastName] = useInput("");
  const submitHandler = e => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetfirstName();
    resetlastName();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" {...bindfirstName} />
        <input type="text" {...bindlastName} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
