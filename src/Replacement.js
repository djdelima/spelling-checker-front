import React from 'react';
import { Table } from 'react-bootstrap';

const Replacements = ({ replacements }) => {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Original</th>
                <th>Replacements</th>
            </tr>
            </thead>
            <tbody>
            {replacements.map((replacement, index) => (
                <tr key={index}>
                    <td>{replacement.original}</td>
                    <td>
                        {replacement.options.map((option, optionIndex) => (
                            <div key={optionIndex}>{option}</div>
                        ))}
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default Replacements;
