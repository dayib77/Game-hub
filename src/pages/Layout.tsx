import NavBar from "@/components/NavBar/NavBar";
import ErrorBoundary from "@/Errors/ErrorBoundary";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={4}>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </Box>
    </>
  );
};

export default Layout;
