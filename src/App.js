import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import history from "./utils/history";
import Home from "./screens/Home";
import Venues from "./screens/Venues/Venues";
import Details from "./screens/Details/Details";
import Login from "./screens/Login";
import "./index.scss";
import ErrorBoundary from "./utils/errorBoundary";
import Error from "./screens/ErrorPage/Error"
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
        path="/venue"
        element={
          <ErrorBoundary>
            <ProtectedRoute>
               <Venues />
            </ProtectedRoute>
          </ErrorBoundary>
        }
      />

      <Route exact path="/venue-details/:id" element={<Details />} />

      <Route exact path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

export default AppWrapper;
