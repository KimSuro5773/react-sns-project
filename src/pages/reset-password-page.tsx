import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ResetPasswordPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold">비밀번호 재설정하기</h2>
        <div className="text-muted-foreground text-sm">
          새로운 비밀번호를 입력하세요
        </div>
      </div>

      <Input className="py-6" type="password" placeholder="password" />
      <Button className="w-full">비밀번호 변경</Button>
    </div>
  );
}
