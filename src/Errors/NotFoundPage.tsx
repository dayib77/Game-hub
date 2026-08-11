import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <>
      <h1>404 - Page Not Found</h1>

      <p>The page you're looking for does not exist.</p>

      <Link to="/">Go Home</Link>
    </>
  );
};

export default NotFoundPage;
