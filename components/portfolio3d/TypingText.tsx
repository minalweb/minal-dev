"use client";

import { useEffect, useState } from "react";

export default function TypingText({
  texts,
  className,
}: {
  texts: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const fullText = texts[index % texts.length];
    let current = 0;

    const typing = setInterval(() => {
      current += 1;
      setDisplay(fullText.slice(0, current));
      if (current >= fullText.length) {
        clearInterval(typing);
        setTimeout(() => {
          setDisplay("");
          setIndex((prev) => prev + 1);
        }, 1600);
      }
    }, 70);

    return () => clearInterval(typing);
  }, [index, texts]);

  return <span className={className}>{display}</span>;
}
