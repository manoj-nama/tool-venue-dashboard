import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import history from "./utils/history";
import Home from "./screens/Home";
import Venues from "./screens/Venues/Venues";
import Login from "./screens/Login";
import "./index.scss";
import ErrorBoundary from "./utils/errorBoundary";

const AppWrapper = () => (
  <BrowserRouter history={history}>
    <Routes>
    <Route
        exact
        path="/"
        element={
          <ErrorBoundary>
            <Login />
          </ErrorBoundary>
        }
      />
      <Route
        exact
        path="/Home"
        element={
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        }
      />
      <Route
        exact
        path="/venue"
        element={
          <ErrorBoundary>
            <Venues />
          </ErrorBoundary>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default AppWrapper;
