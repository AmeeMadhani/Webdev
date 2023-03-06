import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

console.log(notes);

// function createNotes(noteItem){
//   return <Note
//   key={noteItem.key}
//   title={noteItem.title}
//   content={noteItem.content}
//   />
// }

function App() {
  return (
    <div>
      <Header />
      {/* <Note 
      title = "This is the note title"P
      content = "This is the note content"
      
      /> */}
      {/* {notes.map(createNotes)} */}

      {/* //usingn arrow function  */}
      {notes.map(noteItem => <Note
      key={noteItem.key}
      title={noteItem.title}
      content={noteItem.content}
      />
      )}
      <Footer />
    </div>
  );
}

export default App;
