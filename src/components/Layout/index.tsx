import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "components/Spinner";
import { Wrapper } from "./styles";
import Navigation from "../Navigation";

const Home = lazy(() => import("pages/Home"));

function Layout() {
  return (
    <Navigation>
      <Wrapper>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<div>Events</div>} />
            <Route path="/boost" element={<div>Boost</div>} />
          </Routes>
        </Suspense>
      </Wrapper>
    </Navigation>
  );
}

export default Layout;
