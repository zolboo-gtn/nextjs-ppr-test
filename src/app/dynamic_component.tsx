export const DynamicComponent: React.FC<{ timeout: number }> = async ({
  timeout,
}) => {
  await new Promise((resolve) => setTimeout(resolve, timeout));

  return <div>{new Date().toISOString()}</div>;
};
