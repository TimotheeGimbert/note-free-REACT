import React from "react";
import Note from './Note';

const Nav = (props) => {

  return (
    <div className="nav" >
      <button onClick={() => window.location.reload(false)}>Ajouter une nouvelle note</button>
      {Object.keys(props.noteList).map( (title, index) => (
        <div 
          onClick={() => {
            props.changeTitle(title);
            props.changeContent(localStorage[title]);
            props.changeOldTitle(title);
            }
          } 
          key={index}
          >
          <Note 
            title={title} 
            content={localStorage[title]} 
          />
        </div>
      ))} 
    </div>
  );
};

export default Nav;


