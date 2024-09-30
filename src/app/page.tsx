import { Suspense } from "react";

import { DynamicComponent } from "@/components/dynamic_component";
import { StaticComponent } from "@/components/static_component";

export const experimental_ppr = true;
const Home: React.FC = () => {
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
};
export default Home;
