import * as React from 'react';
import './App.css';
import {PktTextinput} from "@oslokommune/punkt-react";

function App() {

    return (
        <>
            <form method={"get"} name={"Mitt ikke-Punkt-skjema"} title={"Mitt ikke-Punkt-skjema"}>
                <input required name={"myInput"} defaultValue={"Min input-tekst"} />
            </form>
            <form method={"get"} name={"Mitt Punkt-skjema"} title={"Mitt Punkt-skjema"}>
                <PktTextinput required name={'myText'} defaultValue={"Min tekst"} />
            </form>
        </>
    );
}

export default App;
