import React from 'react';
import Button from '@material-ui/core/Button';
import { useFlag } from '../FlagProvider';


export default function B() {

    const context = useFlag();

    console.log("Estado: "+context.flag)
    console.log("Aleatorio: "+context.aleatorio)
    console.log("codigo del color: "+context.COLORS[context.aleatorio])

    return (
        <Button
            onClick={() => {
                context.flag ? context.setFlag(false) : context.setFlag(true)
                    ; context.setAleatorio(Math.floor((Math.random() * (15 - 0 + 1)) + 0))
            }}
            style={{ backgroundColor: context.COLORS[context.aleatorio] }}
        >
            Cambiar Estado a {context.flag ? "Desactivado" : "Activado"}
        </Button>
    );
}
