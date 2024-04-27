import React from "react";
import notes from "../notes"

function Note() {
  return (
    <div>
      {notes.map((items) => (
      <div className="note">
      <h1>{items.title}</h1>
      <p>{items.content}</p>
    </div>
    ))}
    </div>
    
    
  );
}

export default Note;
