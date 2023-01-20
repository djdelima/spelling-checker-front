import React from 'react';

const Result = ({ result }) => {
    return (
        <div>
            <h2>Result</h2>
            <p>ID: {result.id}</p>
            <p>Words: {result.info.words}</p>
            <p>Time: {result.info.time}</p>
        </div>
    );
}

export default Result;
