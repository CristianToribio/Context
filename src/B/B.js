import React from 'react';
import Button from '@material-ui/core/Button';
import { ThemeContext } from '../Context/Context';
// import { useTheme } from 'MUI/core/styles';


export default function B() {

    // const theme = useTheme();

    // theme.palette.primary;

    return (
        <ThemeContext.Consumer>
            {({ theme, cambiar, text }) => (
                <Button
                    onClick={cambiar}
                    style={{ backgroundColor: theme.background }}>
                    Cambiar Estado a {text === "Activado" ? "Desactivado" : "Activado"}
                </Button>
            )}
        </ThemeContext.Consumer>
    );
}