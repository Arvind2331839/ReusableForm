import React, { Suspense } from "react";

const LazyComponentB = React.lazy(() => import("./ComponentB"));
const LazyComponentC = React.lazy(() => import("./ComponentC"));
const ComponentA = () => {
  return (
    <div>
      <h1>This is component a</h1>

      <Suspense fallback={<div>Loading....</div>}>
        <LazyComponentB />
         <LazyComponentC />
      </Suspense>
    </div>
  );
};

export default ComponentA;

