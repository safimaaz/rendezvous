import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomLoader from './components/CustomLoader';

const Home = lazy(() => import('./pages/Home'));
const ViewEvent = lazy(() => import('./pages/ViewEvent'));

const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={<CustomLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-event/:id" element={<ViewEvent />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
