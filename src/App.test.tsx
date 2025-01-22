import * as React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('Punkt-skjema skal være gyldig', async () => {
        render(<App/>);
        await waitFor(() => {})
        const punktForm: HTMLFormElement = screen.getByRole('form', {name: "Mitt Punkt-skjema"}) as HTMLFormElement;
        expect(punktForm.checkValidity()).toBeTruthy();
    });
    it('Ikke-Punkt-skjema skal være ugyldig', async () => {
        render(<App/>);
        await waitFor(() => {})
        const ikkePunktForm: HTMLFormElement = screen.getByRole('form', {name: "Mitt ikke-Punkt-skjema"}) as HTMLFormElement;
        expect(ikkePunktForm.checkValidity()).toBeTruthy();

    });
});
