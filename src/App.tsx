import { useLayoutEffect } from "react";
import { Outlet, useLocation, ScrollRestoration } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}

export default App;
