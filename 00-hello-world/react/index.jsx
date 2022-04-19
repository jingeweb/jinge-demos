import React from 'react';
import {
  createRoot
} from 'react-dom/client';

const App = () => {
  return <div>Hello, World!</div>;
}

createRoot(document.getElementById('root-app')).render(<App/>);
