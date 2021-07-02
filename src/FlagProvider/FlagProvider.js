import React from 'react';

export const FlagContext = React.createContext();

export const FlagProvider = ({ children }) => {

    const [flag, setFlag] = React.useState(false);
    const [aleatorio, setAleatorio] = React.useState(0);
    
    const COLORS = ["#f88586", "#f3aa5b", "#7a7876", "#b1e8fa", "#ddbc39", "#00aa5a", "#296e88", "#bbb6b4", "#e5e6e6", "#fff600", "#f000ff", "#ff7f00", "#ff7f00", "#7c57b0", "#591836", "#000000", "#FFFFFF"]


    return (
        <FlagContext.Provider value={{ flag, setFlag,aleatorio,setAleatorio,COLORS }}>
            {children}
        </FlagContext.Provider>
    );

};
