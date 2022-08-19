import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function AuthCallback() {
  const [searchParams] = useSearchParams();
  const expires_in = searchParams.get("expires_in");
  const approval_token = searchParams.get("approval_token");

  useEffect(() => {
    if (!expires_in || !expires_in) return;
    if (window.opener) {
      // send them to the opening window
      window.opener.postMessage({
        expires_in,
        approval_token,
      });
      // close the popup
      window.close();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <svg
        className="animate-spin ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </>
  );
}

export default AuthCallback;
