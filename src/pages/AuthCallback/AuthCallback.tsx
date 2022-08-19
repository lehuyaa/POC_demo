import { useEffect } from "react";
import { useMutation } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useUser } from "api/auth";
import { LOCAL_STORAGE_KEY } from "config";
import { Path } from "routes";
import { exchangeAuthorizationCode } from "utils/oauth2";

function AuthCallback() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const { refetch } = useUser();
  const navigate = useNavigate();

  const { mutate } = useMutation(exchangeAuthorizationCode, {
    onSuccess: ({ access_token, refresh_token }) => {
      localStorage.setItem(LOCAL_STORAGE_KEY.token, access_token);
      localStorage.setItem(LOCAL_STORAGE_KEY.refreshToken, refresh_token);
      refetch();
      navigate(Path.Welcome);
    },
    onError: (err: any) => {
      console.log(err);
      navigate(Path.Welcome);
    },
  });

  useEffect(() => {
    if (!code) return;
    mutate(code);
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
