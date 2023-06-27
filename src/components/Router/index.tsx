import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "components/Spinner";

const Layout = lazy(() => import("components/Layout"));

function Router() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="not-found" element={<div>not found</div>} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
