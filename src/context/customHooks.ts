import { useContext, createContext } from "react";
import { type ApiStatusContextValue } from "./ApiStatusContext";

export const ApiStatusContext = createContext<ApiStatusContextValue | null>(
  null
);

export function useApiStatus() {
  const ctx = useContext(ApiStatusContext);
  if (!ctx) {
    throw new Error("useApiStatus must be used within ApiStatusProvider");
  }
  return ctx;
}
