import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import history from "./utils/history";
import Home from "./screens/Home";
import Venues from "./screens/Venues/Venues";
import Login from "./screens/Login";
import "./index.scss";
import ErrorBoundary from "./utils/errorBoundary";
import ProtectedRoute from "./utils/ProtectedRoute";

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
        path="/dashboard"
        element={
          <ErrorBoundary>
            <ProtectedRoute>
               <Home />
            </ProtectedRoute>
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
            <ProtectedRoute>
               <Venues />
            </ProtectedRoute>
          </ErrorBoundary>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default AppWrapper;
