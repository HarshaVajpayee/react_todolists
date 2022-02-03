import React, { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveIcon from '@material-ui/icons/Remove';

const Myaccordion = ({question, answer}) => {
    const [show, setShow] = useState(false);
    return (
        <>
           <div className="main_heading">
               <p onClick={() => setShow(!show)}>{show ? <RemoveIcon className="remove" style={{ fontSize: '40px' }} /> : <AddCircleIcon className="add" style={{ fontSize: '40px' }}/>}</p>
               <h3>{question}</h3>
           </div>
            {show && <p className="answers">{answer}</p>}
        </>
    )
}

export default Myaccordion;