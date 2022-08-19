import { shortenAddress, useEthers } from "@usedapp/core";
import { useUser } from "api/auth";
import Button from "components/atoms/button";
import { Tooltip } from "components/Tooltip";
import { LOCAL_STORAGE_KEY, LOGOUT_URL } from "config";
import React from "react";
import { useQueryClient } from "react-query";
import { getOAuth2AuthorizeURL } from "utils/oauth2";
import Main from "./Main";

const Auth = () => {
  const { activateBrowserWallet, deactivate, account } = useEthers();
  const queryClient = useQueryClient();
  const { user } = useUser();

  const handleLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY.token);
    localStorage.removeItem(LOCAL_STORAGE_KEY.refreshToken);
    localStorage.removeItem(LOCAL_STORAGE_KEY.user);
    queryClient.setQueriesData("me", undefined);
    window.location.href = LOGOUT_URL;
  };

  const handleLogin = () => {
    const oauth2URL = getOAuth2AuthorizeURL();
    window.location.href = oauth2URL;
  };

  if (!account) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <Button onClick={activateBrowserWallet}>Connect Wallet</Button>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center mt-10 rounded-md bg-slate-800 w-fit p-3">
        <div>
          <h3 className="text-sm">
            Connected with: <span className="font-medium">{account}</span>
          </h3>
          {user?.wallet_address && (
            <h3 className="text-sm flex">
              bitkubnext address:&nbsp;
              <span className="font-medium">{user.wallet_address}</span>
            </h3>
          )}
        </div>
        <button
          onClick={deactivate}
          className="bg-blue-700 ml-4 font-semibold hover:bg-blue-800 active:opacity-5 transition duration-500 px-2 py-1"
        >
          Disconnect
        </button>

        {!!user ? (
          <button
            onClick={handleLogout}
            className="bg-blue-700 ml-4 font-semibold hover:bg-blue-800 active:opacity-5 transition duration-500 px-2 py-1"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-blue-700 ml-4 font-semibold hover:bg-blue-800 active:opacity-5 transition duration-500 px-2 py-1"
          >
            Login
          </button>
        )}
      </div>
      <Main />
    </>
  );
};

export default Auth;
