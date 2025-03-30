import React from "react";

function BgDropFilter({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) {
  return (
    <main className="relative h-full overflow-hidden">
      <section
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${url})` }}
      ></section>

      <div className="absolute inset-0 bg-black opacity-50"></div>
      {children}
    </main>
  );
}

export default BgDropFilter;
