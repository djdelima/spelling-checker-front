import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SpellingChecker from './SpellingChecker';
import fetchMock from 'jest-fetch-mock';

describe('SpellingChecker', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
        fetchMock.mockResponseOnce(JSON.stringify({
                id: '123',
                info: {
                    words: 10,
                    time: '2022-01-01T00:00:00.000Z'
                },
                issues: [
                    {
                        type: 'spelling',
                        match: {
                            surface: 'susan',
                            replacement: ['Susan']
                        }
                    }
                ]
            }))
    });

    it('renders a textarea and a button', () => {
        const { getByRole } = render(<SpellingChecker />);
        expect(getByRole('textbox')).toBeInTheDocument();
        expect(getByRole('button')).toBeInTheDocument();
    });

    it('updates the text state when the textarea value changes', () => {
        const { getByRole } = render(<SpellingChecker />);
        const textarea = getByRole('textbox');
        fireEvent.change(textarea, { target: { value: 'some text' } });
        expect(textarea.value).toBe('some text');
    });

});
