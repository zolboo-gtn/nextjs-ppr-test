"use client";

import { useActionState } from "react";

import { testAction } from "@/actions/test_action";

export const Form = () => {
  const [message, formAction, isPending] = useActionState<
    string | null,
    FormData
  >(testAction, null);

  return (
    <form action={formAction}>
      <input type="text" name="text" />
      <button type="submit" disabled={isPending}>
        {isPending ? "Submitting" : "Submit"}
      </button>
      <p>{message}</p>
    </form>
  );
};
