import * as React from "react";
import { useState } from "react";
import { Authenticated } from "./Authenticated";
import { Unauthorized } from "./Unauthorized";

export function Main() {
  const [token, setToken] = useState();

  if (!token) return <Unauthorized />;

  return <Authenticated />;
}
