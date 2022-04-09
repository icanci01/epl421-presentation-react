import { Subscription } from "use-subscription";

const storage = sessionStorage;
const EVENT_NAME = "token_change";
const ACCESS_TOKEN_KEY_NAME = "__FTP_TOKEN__";

let evtTarget: EventTarget | HTMLDivElement;

try {
  evtTarget = new EventTarget();
} catch (error) {
  evtTarget = document.createElement("div");
}

export interface Token {
  idToken: string;
  refreshToken: string;
  userId: string;
}

function update(token: Token | null) {
  if (token == null) storage.removeItem(ACCESS_TOKEN_KEY_NAME);
  else storage.setItem(ACCESS_TOKEN_KEY_NAME, JSON.stringify(token));

  evtTarget.dispatchEvent(
    new CustomEvent<{ key: string }>(EVENT_NAME, {
      detail: { key: EVENT_NAME },
    })
  );
}

export function getToken(): Token | null {
  const raw = storage.getItem(ACCESS_TOKEN_KEY_NAME);
  return raw === null ? null : (JSON.parse(raw) as Token);
}

export function clearToken(): void {
  update(null);
}

export function setToken(token: Token): void {
  update(token);
}

export const tokenSubscription: Subscription<Token | null> = {
  getCurrentValue: getToken,
  subscribe: (callback) => {
    const listener = (evt: Event) => {
      if (evt instanceof CustomEvent) {
        const { detail } = evt;
        if (detail.key === EVENT_NAME) callback();
      }
    };
    evtTarget.addEventListener(EVENT_NAME, listener);
    return () => evtTarget.removeEventListener(EVENT_NAME, listener);
  },
};