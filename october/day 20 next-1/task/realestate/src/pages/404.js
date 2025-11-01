import ErrorComponent from "@/pages/error/index.jsx";
import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <ErrorComponent />
    </div>
  );
};

export default ErrorPage;
ErrorPage.getLayout = function (page) {
  return <> {page}</>;
};
