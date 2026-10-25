"use client";

import { useEffect, useState } from "react";
import { fmtTime } from "@/lib/data";

export default function Countdown({ seconds, className = "" }: { seconds: number; className?: string }) {
  const [s, setS] = useState(seconds);
  useEffect(() => {
    const t = setInterval(() => setS((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  return <span className={className}>{fmtTime(s)}</span>;
}
