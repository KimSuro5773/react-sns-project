import CommentItem from "@/components/comment/comment-item";
import { useCommentsData } from "@/hooks/queries/use-comments-data";
import FallBack from "@/components/fallback";
import Loader from "@/components/loader";

export default function CommentList({ postId }: { postId: number }) {
  const {
    data: comments,
    error: fetchCommentsError,
    isPending: isFetchCommentsPending,
  } = useCommentsData(postId);

  if (fetchCommentsError) return <FallBack />;
  if (isFetchCommentsPending) return <Loader />;

  return (
    <div className="flex flex-col gap-5">
      {comments.map((comments) => (
        <CommentItem key={comments.id} {...comments} />
      ))}
    </div>
  );
}
