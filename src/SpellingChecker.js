import React, { useState } from 'react';
import Result from './Result';
import Issues from './Issues';

function SpellingChecker() {
    const [text, setText] = useState('');
    const [result, setResult] = useState(null);

    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    const handleCheckSpelling = () => {
        fetch(process.env.REACT_APP_SPELL_CHECK_URL + "/spell-check", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: text }),
        })
            .then(response => response.json())
            .then(data => setResult(data))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <textarea value={text} onChange={handleTextChange} />
            <button onClick={handleCheckSpelling}>Check Spelling</button>
            {result && (
                <div>
                    <Result result={result} />
                    <Issues issues={result.issues} />
                </div>
            )}
        </div>
    );
}

export default SpellingChecker;
