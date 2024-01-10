import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div className="bg-red-100 w-full h-screen flex items-center justify-center">
      <div>
        <h1 className="text-red-600 text-4xl text-center mb-4">Oops!</h1>
        <p className="text-center">Sorry, an unexpected error has occurred.</p>
        <p className="text-center">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
