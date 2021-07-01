import React from 'react';

export const themes = {
    light: {
        background: '#ef9895',
    },
    dark: {
        background: '#7a7876',
    },
};


export const ThemeContext = React.createContext({
    theme: themes.dark,
    text: "Activado",
    cambiar: () => { },
});