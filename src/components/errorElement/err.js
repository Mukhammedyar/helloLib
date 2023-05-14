import React, { Component } from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorMessage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex items-center justify-center w-full h-[100vh]">
      <div className="w-[300px] h-[300px] flex flex-col">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
