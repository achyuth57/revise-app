import React from "react";

function Count({ text, value }) {
  console.log("Count");
  return (
    <div>
      {text} -- {value}
    </div>
  );
}

export default React.memo(Count);
