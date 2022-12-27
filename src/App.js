import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import history from './utils/history';
import Home from './screens/Home';
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
      </Routes>
  </BrowserRouter>
);

export default AppWrapper;
