const ErrorLayout = ({ errorMsg }) => {
  return (
    <div className="alert alert-danger text-start" role="alert">
      {errorMsg}
    </div>
  );
};
export default ErrorLayout;
