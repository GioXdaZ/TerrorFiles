import { useRouteError } from "react-router-dom";
import "../App.css";

export const ErrorPage = () => {
  const err = useRouteError();
  console.error(err);

  return (
    <div
      id="error-page"
      className="alert alert-error shadow-lg mt-10 h-52 flex flex-col justify-center"
    >
      <div>
        <h1 className=" text-6xl">Oops!</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-16 w-16 mt-2"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="text-2xl flex flex-col">
        <p>Sorry, an unexpected error has ocurred.</p>
        <p>
          <i>{err.statusText || err.message}</i>
        </p>
      </div>
    </div>
  );
};
