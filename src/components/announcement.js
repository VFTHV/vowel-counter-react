import React from "react";

function Announcement({ vowels }) {
  return (
    <div className="row border border-3 border-success rounded m-2">
      <div className="col-6">
        {vowels === 0 ? (
          <h2>There are no vowels in your phrase</h2>
        ) : (
          <h2>Number of vowels in your phrase: {vowels}</h2>
        )}
      </div>
    </div>
  );
}

export default Announcement;
