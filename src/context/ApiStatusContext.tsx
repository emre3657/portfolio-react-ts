import { startTransition, useEffect, useState, type ReactNode } from "react";
import { ApiStatusContext } from "./customHooks";
import { startApi, startApiWithRetry } from "../utility/api";

export type ApiState = "idle" | "pending" | "success" | "error";

export type ApiStatusContextValue = {
  state: ApiState;
  isReady: boolean;
  refresh: () => void;
};

export function ApiStatusProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ApiState>("idle");

  const build = () => {
    startTransition(() => {
      setState("pending");
    });

    startApiWithRetry(startApi, {
      attempts: 5,
      initialDelay: 2000,
      backoffFactor: 2,
    }).then((result) => {
      startTransition(() => {
        setState(result === "success" ? "success" : "error");
      });
    });
  };

  useEffect(() => {
    build();
  }, []);

  const value: ApiStatusContextValue = {
    state,
    isReady: state === "success",
    refresh: build,
  };

  return <ApiStatusContext value={value}>{children}</ApiStatusContext>;
}
