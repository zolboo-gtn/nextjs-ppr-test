import { Suspense } from "react";

import { DynamicComponent } from "./dynamic_component";
import { StaticComponent } from "./static_component";

export const experimental_ppr = true;
export default async function Home() {
  return (
    <main>
      <StaticComponent />
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicComponent timeout={1000} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicComponent timeout={2000} />
      </Suspense>
    </main>
  );
}
