import React from "react";

const Button=(props:any)=>{
    const {name,buttonHandler,...rest}=props;
    return(
        <div className="button-container">
            <button className="general-button" onClick={buttonHandler} {...rest}>{name}</button>
        </div>
    )
}

export default React.memo(Button);