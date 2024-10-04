import React from 'react';

// Content component. Returns "Hello World" and current time.
const Content = () => {
    return (
        <div>
            <h1>Hello World!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

export default Content;