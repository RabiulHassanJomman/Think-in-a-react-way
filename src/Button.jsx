import React from "react";

export default React.memo(function Button({ children, handleClick }) {
  console.log(`${children} rendered`);
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {children}
      </button>
    </div>
  );
});
