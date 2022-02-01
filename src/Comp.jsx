import React, { useState } from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Comp = (props) => {

    const[line, setLine] = useState(false);
    const cutIt = () => {
        setLine(true);
    };

    return (
        <div className="todo_style">
          <span onClick={cutIt}> <DeleteForeverIcon className="deleteIcon" /> </span>
          <li style={{textDecoration: line ? "line-through" : "none"}}> {props.text} </li>;
        </div>
    )
};

export default Comp;