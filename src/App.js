import React from 'react';
import A from './A/A';
import B from './B/B';
import { ThemeContext, themes } from './Context/Context';


class App extends React.Component {
  constructor() {
    super();

    this.cambiar = () => {
      let estado
      if (this.state.text === "Activado") {
        estado = "Desactivado"
      } else {
        estado = "Activado"
      }

      console.log("cambiando el estado: " + estado)

      this.setState(state => ({ 
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
        text:
          state.text === "Activado"
            ? "Desactivado"
            : "Activado",
      }));
    };

    this.state = {
      theme: themes.dark,
      text: "Activado",
      cambiar: this.cambiar,
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <>
      <A />
      <B />
    </>
  );
}

export default App;