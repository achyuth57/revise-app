import React, { useState } from "react";

function HookCounter3() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <h1>First Name : {name.firstName}</h1>
      <h1>Last Name : {name.lastName}</h1>

      <input
        type="text"
        name="firstName"
        value={name.firstName}
        onChange={e => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        name="lastName"
        value={name.lastName}
        onChange={e => setName({ ...name, lastName: e.target.value })}
      />
    </div>
  );
}

export default HookCounter3;
