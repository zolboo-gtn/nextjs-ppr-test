"use client";

import { useState } from "react";
import { CounterChild } from "./counter_child";

type Props = Readonly<{}>;
export const CounterComponent: React.FC<Props> = ({}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={increment}>{count}</button>
      <CounterChild />
    </div>
  );
};
