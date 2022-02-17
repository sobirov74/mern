import * as React from 'react';


type props = {
    onDelete: void;
}



const Delete:React.FC<props> = ({onDelete}) => {
return <i
    onClick={() => onDelete}
    className="material-icons red-text"
  >
    delete
  </i>
    
}

export default Delete;