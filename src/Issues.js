import React from 'react';

const Issues = ({ issues }) => {
    return (
        <div>
            <h2>Issues:</h2>
            <table>
                <thead>
                <tr>
                    <th>Type</th>
                    <th>Surface</th>
                    <th>Replacement</th>
                </tr>
                </thead>
                <tbody>
                {issues.map((issue, index) => (
                    <tr key={index}>
                        <td>{issue.type}</td>
                        <td>{issue.match.surface}</td>
                        <td>
                            {issue.match.replacement.map((replacement, index) => (
                                <div key={index}>{replacement}</div>
                            ))}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Issues;
