"use client";

type Props = {};
export const CounterChild: React.FC<Props> = ({}) => {
  const date = new Date();

  return <div>{`Child: ${date.getTime()}`}</div>;
};
