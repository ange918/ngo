"use client";

import { useState } from "react";

export default function FollowButton() {
  const [on, setOn] = useState(false);
  return (
    <button onClick={() => setOn((v) => !v)} className={`btn !px-4 !py-2 ${on ? "btn-ghost" : "btn-accent"}`}>
      {on ? "Following" : "Follow"}
    </button>
  );
}
