import { createComment } from "@/api/comment";
import { useProfileData } from "@/hooks/queries/use-profile-data";
import { QUERY_KEYS } from "@/lib/constants";
import { useSession } from "@/store/session";
import type { Comment, UseMutationCallback } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateComment(callbacks?: UseMutationCallback) {
  const queryClient = useQueryClient();
  const session = useSession();
  const { data: propfile } = useProfileData(session?.user.id);

  return useMutation({
    mutationFn: createComment,
    onSuccess: (newComment) => {
      if (callbacks?.onSuccess) callbacks.onSuccess();

      queryClient.setQueryData<Comment[]>(
        QUERY_KEYS.comment.post(newComment.post_id),
        (comments) => {
          if (!comments)
            throw new Error("댓글이 데이터에 보관되어있지 않습니다.");

          if (!propfile)
            throw new Error("사용자의 프로필 정보를 찾을 수 없습니다.");

          return [{ ...newComment, author: propfile }, ...comments];
        },
      );
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
