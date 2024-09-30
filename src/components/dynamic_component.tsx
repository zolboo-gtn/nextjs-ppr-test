import { cookies } from "next/headers";

type Props = { timeout: number };
export const DynamicComponent: React.FC<Props> = async ({ timeout }) => {
  const session = cookies().get("session")?.value;
  await new Promise((resolve) => setTimeout(resolve, timeout));

  return <div>{new Date().toISOString()}</div>;
};
