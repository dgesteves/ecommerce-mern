import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div>Not Found</div>;
    }

    if (error.status === 401) {
      return <div>Auth Error</div>;
    }

    if (error.status === 503) {
      return <div>API Error</div>;
    }

    if (error.status === 418) {
      return (
        <span role="img" aria-label="teapot Emoji">
          🫖
        </span>
      );
    }
  }

  return <div>Something Wrong Happen!</div>;
}
