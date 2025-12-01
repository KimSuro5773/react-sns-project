import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ForgetPasswordPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold">비밀번호를 잊으셨나요?</h2>
        <div className="text-muted-foreground text-sm">
          이메일로 비밀번호를 재설정 할 수 있는 인증 링크를 보내드립니다.
        </div>
      </div>

      <Input className="py-6" placeholder="example@abc.com" />
      <Button className="w-full">인증 코드 발송</Button>
    </div>
  );
}
