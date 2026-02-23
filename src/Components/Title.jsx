import React from "react";

export default React.memo(function Title() {
  console.log("title rendered");
  return (
    <div>
      <h1>This is a title</h1>
    </div>
  );
});
