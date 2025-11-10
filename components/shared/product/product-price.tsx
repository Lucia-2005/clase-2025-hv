import React from "react";
import { cn } from "@/lib/utils";

export default function ProductPrice({
  value,
  className,
}: {
  value: number;
  className?: String;
}) {
  const stringValue = value.toFixed(2);
  const [entera, decimal] = stringValue.split(".");
  return (
  <p className={cn("text-2x1", className)}>
    <span className="text-xs align-super">€</span>
    {entera}
    <span className="text-xs align-super">.{decimal}</span>
  </p>
  )
}
