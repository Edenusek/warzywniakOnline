import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  

  return (
    <div id="error-page">
      <h1>O Kurwa!</h1>
      <p>Coś poszło bardzo nie tak !!!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}