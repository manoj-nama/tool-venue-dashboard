import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import history from './utils/history';
import Home from './screens/Home';
import Venues from './screens/Venues/Venues';
import Details from './screens/Details/Details';

import './index.scss';


const AppWrapper = () => (
  <BrowserRouter history={history}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home />
        }
        />
         <Route
          exact
          path="/venue"
          element={
            <Venues  />
        }
        />

        <Route
          exact
          path="/details"
          element={
            <Details  />
        }
        />


      </Routes>
  </BrowserRouter>
);

export default AppWrapper;
