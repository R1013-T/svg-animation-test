import React from "react";
import Computer from "./_components/computer";

export default function Page() {
  return (
    <div className="h-dvh w-dvw overflow-x-hidden p-6 bg-black text-zinc-500">
      <div className="md:hidden">mobile</div>
      <div className="lg:h-full w-full hidden md:block">
        <Computer />
      </div>
    </div>
  );
}
