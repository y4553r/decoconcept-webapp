import React, { Suspense, lazy } from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';

import './App.css';
import Navbar from './Components/Navbar/Navbar';

const Landing = lazy(() => import('./pages/Landing'));
const Presentation = lazy(() => import('./pages/Presentation'));

const App = () => {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <CssBaseLine />
      <Navbar />
      <Landing id="home" />
      <Presentation id="presentation" />
    </Suspense>
  );
}

export default App;
