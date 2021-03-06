import { useCallback, useState } from "react";

interface Values {
  id?: string;
  title: string;
  description: string;
  maxXp: number;
  minLevel: number;
  disabled: boolean;
  archived: boolean;
}

export function usePostQuest() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);

  const post = useCallback(async (values: Values | { delete: true; id: string }) => {
    try {
      setLoading(true);
      await fetch(`${window.location.hostname === "localhost" ? "http://localhost:3000" : ""}/api/quest`, {
        method: "POST",
        mode: "no-cors",
        cache: 'no-cache',
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(values)
      })
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [setError, setLoading]);

  return { loading, error, post };
}
