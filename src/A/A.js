import React from 'react';
import { useFlag } from '../FlagProvider';


export default function A() {

    const context = useFlag();

    return context.flag ? <p style={{ backgroundColor: context.COLORS[context.aleatorio] }}>Activado</p> : <p>Desactivado</p>;
}