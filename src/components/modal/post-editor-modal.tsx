import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ImageIcon } from "lucide-react";
import { usePostEditorModal } from "@/store/post-editor-modal";

export default function PostEditorModal() {
  const { isOpen, close } = usePostEditorModal();

  const handleCloseModal = () => {
    close();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent>
        <DialogTitle>포스트 작성</DialogTitle>
        <textarea></textarea>
        <Button>
          <ImageIcon />
          이미지 추가
        </Button>
        <Button>저장</Button>
      </DialogContent>
    </Dialog>
  );
}
