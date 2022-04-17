import * as React from "react";
import { useState } from "react";
import { getToken } from "../utils/authToken";
import { Authenticated } from "./Authenticated";
import { Unauthorized } from "./Unauthorized";

export function Main() {
  const [token, setToken] = useState();

  return !token ? <Authenticated /> : <Unauthorized />;
}
