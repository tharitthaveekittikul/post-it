import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav className="sticky top-0 h-16 flex items-center bg-white shadow-lg text-primary px-6">
        <Link to="/">
          <h1 className="text-3xl font-bold">Post It</h1>
        </Link>
      </nav>
      <main className="w-full max-w-3xl mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
