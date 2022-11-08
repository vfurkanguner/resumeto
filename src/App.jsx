import React, { useState } from "react";

function App() {
  return (
    <div className="relative flex flex-col">
      <main className=" md:fixed left-0 top-0 overflow-y-auto bottom-0 bg-shadow md:w-1/2 p-2">
        main
      </main>

      <aside className="md:fixed right-0 top-0 bottom-0 md:w-1/2 p-2">ben</aside>
    </div>
  );
}

export default App;
