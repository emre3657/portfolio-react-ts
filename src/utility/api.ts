const API_URL = import.meta.env.VITE_PORTFOLIO_API_URL;
const URL = API_URL ? API_URL + "/api/build" : "/api/build";

export async function startApi(): Promise<"success" | "error"> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    const res = await fetch(URL, {
      method: "GET",
      signal: controller.signal,
    });

    if (!res.ok) {
      return "error";
    }

    return "success";
  } catch (err) {
    return "error";
  } finally {
    clearTimeout(timeout);
  }
}

function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

type RetryOptions = {
  attempts?: number;
  initialDelay?: number;
  backoffFactor?: number;
};

export async function startApiWithRetry(
  fn: () => ReturnType<typeof startApi>,
  opts: RetryOptions = {}
): Promise<"success" | "error"> {
  const { attempts = 4, initialDelay = 1000, backoffFactor = 2 } = opts;

  let delay = 0;

  for (let attempt = 1; attempt <= attempts; attempt++) {
    if (attempt > 1) {
      await sleep(delay || initialDelay);
    }

    const result = await fn();
    if (result === "success") return "success";

    delay = delay ? delay * backoffFactor : initialDelay;
  }

  return "error";
}
