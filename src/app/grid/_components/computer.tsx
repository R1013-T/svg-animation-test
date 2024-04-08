import React from "react";

export default function Computer() {
  return (
    <div className="h-5/6 lg:h-full max-w-7xl mx-auto flex md:flex-wrap gap-3 lg:flex-nowrap">
      <div className="w-full h-full flex flex-col gap-3">
        <div className="w-full h-64 flex gap-3">
          <div className="w-full h-full border rounded-3xl bg-zinc-900 p-5">
            profile
          </div>
          <div className="w-64 aspect-square border rounded-3xl bg-zinc-900 p-5">
            none
          </div>
        </div>
        <div className="w-full h-full flex gap-3">
          <div className="min-w-64 w-full h-[396px] lg:h-full border rounded-3xl bg-zinc-900 p-5">
            tree
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-64 lg:h-full lg:min-h-80 w-full border rounded-3xl bg-zinc-900 p-5">
              work
            </div>
            <div className="flex gap-3">
              <div className="w-32 aspect-square border rounded-3xl bg-zinc-900 p-5">
                GitHub
              </div>
              <div className="w-32 aspect-square border rounded-3xl bg-zinc-900 p-5">
                X
              </div>
              <div className="w-32 aspect-square border rounded-3xl bg-zinc-900 p-5">
                Instagram
              </div>
              <div className="w-32 aspect-square border rounded-3xl bg-zinc-900 p-5">
                Mail
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:h-full w-full flex-wrap lg:flex-nowrap gap-3 lg:w-auto flex lg:flex-col">
        <div className="flex gap-3 w-full">
          <div className="h-32 w-64 border rounded-3xl bg-zinc-900 p-5">
            theme
          </div>
          <div className="w-32 h-full lg:h-32 aspect-square border rounded-3xl bg-zinc-900 p-5">
            lang
          </div>
          <div className="lg:hidden w-full h-32 border rounded-3xl bg-zinc-900 p-5">
            none
          </div>
        </div>
        <div className="h-64 lg:h-full w-full lg:min-h-96 border rounded-3xl bg-zinc-900 p-5">
          technologies
        </div>
        <div className="h-80 w-full min-h-32 border rounded-3xl bg-zinc-900 p-5">
          articles
        </div>
      </div>
    </div>
  );
}
