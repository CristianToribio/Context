import React from 'react';
import A from './A/A';
import B from './B/B';
import { FlagProvider } from './FlagProvider';

function App() {
  return (
    <FlagProvider>
      <A />
      <B />
    </FlagProvider>
  );
}

export default App;