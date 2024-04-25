const ErrorPage = ({ error }) => {
  return (
    <div>
      <span>Something went wrong</span>
      <span>{error}</span>
    </div>
  );
};

export default ErrorPage;
