import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <h1>Post It</h1>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
