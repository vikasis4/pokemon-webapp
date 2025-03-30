import React from "react";

function BgDropFilter({ url }: { url: string }) {
  return (
    <main>
      <section
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${url})` }}
      ></section>

      <div className="absolute inset-0 bg-black opacity-50"></div>
    </main>
  );
}

export default BgDropFilter;
