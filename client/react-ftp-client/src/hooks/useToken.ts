import { useSubscription } from "use-subscription";
import { clearToken, setToken, Token, tokenSubscription } from "../utils/authToken";

export const useToken = (): [
  Token | null,
  (token: Token) => void,
  () => void
] => {
  const value = useSubscription(tokenSubscription);

  return [value, setToken, clearToken];
};