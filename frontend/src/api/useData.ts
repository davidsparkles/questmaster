import { useCallback, useEffect, useState } from "react";

export type questState = "open" | "closed" | "hidden";

export interface Quest {
  id: string;
  title: string;
  description: string;
  maxXp: number;
  xp: number | null;
  minLevel: number;
  disabled: boolean;
  archived: boolean;
  state: questState;
  versions?: Version[];
}

export interface Version {
  id: number;
  quest_id: number;
  created_at: string;
  fields: any;
}

export interface Level {
  id: number;
  requiredXp: number;
}

export interface Data {
  maxLevel: number;
  currentLevel: number;
  currentXp: number;
  xpWithinCurrentLevel: number;
  xpToNextLevel: number;
  quests: Quest[];
  levels: Level[];
}

async function getData<T = Data>(path?: string): Promise<T> {
  const res = await fetch(path ?? "/api/data");
  if (res.status === 200) return res.json();
  console.error(`Fetch error: ${res.status} ${res.statusText} ${res.text()}`);
  throw new Error(res.statusText);
}

export function useData<T = Data>(path?: string): { data?: T; error?: any; loading: boolean; refetch: () => void } {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<any | undefined>(undefined);

  const refetch = useCallback(() => {
    (async () => {
      try {
        setLoading(true);
        setData(await getData(path));
        setError(undefined);
      } catch (err) {
        console.log(err);
        setData(undefined);
        setError("Upps ein Fehler ist aufgetreten.");
      } finally {
        setLoading(false);
      }
    })();
  }, [path]);

  useEffect(refetch, [refetch]);

  return { data, error, loading, refetch };
}
