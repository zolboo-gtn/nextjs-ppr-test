import { cookies } from "next/headers";

export const DynamicComponent: React.FC<{ timeout: number }> = async ({
  timeout,
}) => {
  const session = cookies().get("session")?.value;
  await new Promise((resolve) => setTimeout(resolve, timeout));

  return <div>{new Date().toISOString()}</div>;
};
