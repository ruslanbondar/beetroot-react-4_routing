import React from 'react';

import { Header } from './components/Header/Header';
import { AppRoutes } from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
