"use server";

export async function testAction(previousState: string | null, data: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return new Date().toISOString();
}
