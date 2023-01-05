import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import history from "./utils/history";
import Home from "./screens/Home";
import Venues from "./screens/Venues/Venues";
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
            <Home />
          </ErrorBoundary>
        }
      />
      <Route
        exact
        path="/users"
        element={
          <ErrorBoundary>
            <Venues />
          </ErrorBoundary>
        }
      />
      <Route
        exact
        path="/bets"
        element={
          <ErrorBoundary>
            <Venues />
          </ErrorBoundary>
        }
      />
      <Route
        exact
        path="/amount"
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
