import * as React from "react";
import { Authenticated } from "./Authenticated";
import {Unauthorized } from "./Unauthorized";
import { useToken } from "../hooks/useToken";
import { getToken, Token } from "../utils/authToken";

function useAuth() {
  return React.useCallback(() => {
    const newLocal = "/api/auth";
    return fetch(newLocal, {
      method: "GET",
    })
      .then((fetchResult) => {
        if (fetchResult.ok) {
          return fetchResult.json();
        }
      })
      .then((token: Token) => {
        return token;
      });
  }, []);
}

export function Main() {
  const [token, setToken] = useToken();
  const auth = useAuth();

  if (token === null) {
    const storageToken = getToken();
    if (storageToken) setToken(storageToken);
    else auth().then(setToken);
  }

  return (
    <>
      {token !== null ? (
        <Unauthorized />
      ) : (
        <Authenticated />
      )}
    </>
  );
}
