import React, { Suspense, lazy } from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';

import Navbar from './Components/Navbar/Navbar';
// import Landing from './pages/Landing'
// import Presentation from './pages/Presentation';

const Landing = lazy(() => import('./pages/Landing'));
const Presentation = lazy(() => import('./pages/Presentation'));

function App() {
  
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <CssBaseLine />
      <Navbar />
      {/* <Swtich> */}
      {/* <Route path="/" render={routerProps => <Landing {...routerProps} />} /> */}
      {/* <Route path="/presentation" render={routerProps => <Presentation {...routerProps} />} /> */}
      <Landing id="home" />
      <Presentation id="presentation" />
      {/* </Swtich> */}
    </Suspense>
  );
}

export default App;
