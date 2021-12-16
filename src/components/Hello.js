import React from "react";

const Hello = () => {

    return (
        <div className='has-text-centered'>
            <h1 className="title">Sveiki atvyke!</h1>
        </div>
    )

    // pure javascript
    //return React.createElement('div', {id:'hello', className:'dummyClass'}, React.createElement('h1' , null, 'Hello Irme'));
}

export default Hello;