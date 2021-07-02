import React from 'react';
import { FlagContext } from './FlagProvider';


export default function Flag ()  {
    const flag = React.useContext(FlagContext);

    return flag;
};
