// LoadingWrapper.tsx
"use client";

import { useState, useEffect } from "react";

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <div className="loading-skeleton">Loading...</div>;
  return <>{children}</>;
}
