import NavBar from "@/components/NavBar/NavBar";
import ErrorBoundary from "@/Errors/ErrorBoundary";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <NavBar />
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </>
  );
};

export default Layout;
