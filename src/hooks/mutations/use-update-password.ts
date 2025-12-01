import { updatePassword } from "@/api/auth";
import type { UseMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useUpdatePassword(callbaks?: UseMutationCallback) {
  return useMutation({
    mutationFn: updatePassword,
    onSuccess: () => {
      if (callbaks?.onSuccess) callbaks.onSuccess();
    },
    onError: (error) => {
      if (callbaks?.onError) callbaks.onError(error);
    },
  });
}
