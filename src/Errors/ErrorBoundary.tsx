import { Component, type ErrorInfo, type ReactNode } from "react";
import ErrorPage from "./ErrorPage";
import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
  // fallback: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // log to console or an error-reporting service
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box padding={5}>
          <ErrorPage />
        </Box>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
