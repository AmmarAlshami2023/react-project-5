import React from "react";
import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
function ErrorPage() {
  const error = useRouteError();
  let title = "an error occurred !";
  let message = "something went error";
  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }
  if (error.status === 404) {
    title = "Not found ";
    message = "could not find resource or page ";
  }
  return (
    <PageContent title={title}>
      <p>{message} </p>
    </PageContent>
  );
}

export default ErrorPage;
