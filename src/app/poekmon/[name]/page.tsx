import React, { ReactNode } from "react";

async function page() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon");
  const pks = await data.json();
  console.log(pks);

  return (
    <div>
      {pks.results.map((item: { name: string }): ReactNode => {
        return (
          <div key={item.name} className="m-4">
            {item.name}
          </div>
        );
      })}
    </div>
  );
}

export default page;
