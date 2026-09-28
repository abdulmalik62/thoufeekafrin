import { useEffect, useMemo, useState } from "react";

export type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isReached: boolean;
};

function split(target: Date, now: Date): CountdownState {
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isReached: true };
  }
  const total = Math.floor(diff / 1000);
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
    isReached: false,
  };
}

export function useCountdown(dateISO: string): CountdownState {
  const target = useMemo(() => {
    const [year, month, day] = dateISO.split("-").map(Number);
    return new Date(year, (month ?? 1) - 1, day ?? 1, 0, 0, 0, 0);
  }, [dateISO]);

  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return split(target, now);
}
