import React from 'react'

const HelloWorldFunctional = ({ name, demo, title }) => {
    return (
        <div>
            <h1>{title}</h1>
            Hello {name} {demo}
        </div >
    )
};

export default HelloWorldFunctional