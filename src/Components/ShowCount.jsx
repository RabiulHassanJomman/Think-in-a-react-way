import React from "react";
 
export default React.memo(function ShowCount({ count, title }) {
  console.log(`${title} Rendered`);
  return (
    <div>
      <h1>
        {title}: {count}
      </h1>
    </div>
  );
});
