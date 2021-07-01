import React from 'react';
import { ThemeContext } from '../Context/Context';


export default function A() {

    return (
        <ThemeContext.Consumer>
            {({ text }) => (
                <p>{text}</p>
            )}
        </ThemeContext.Consumer>
    );
}