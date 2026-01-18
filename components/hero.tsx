import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

// 간단한 Hero 섹션 구조 예시
export default function Hero({ title = "Title", content = "Content...." }) {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center bg-amber-500">
      {/* Badge 컴포넌트 활용 */}
      <Badge variant="outline" className="mb-4">
        New Version 4.0
      </Badge>

      <h1 className="text-5xl font-bold tracking-tight text-balance">
        {title}
      </h1>

      <p className="mt-6 text-lg text-muted-foreground max-w-[600px]">
        {content}
      </p>

      <div className="mt-10 flex gap-4">
        <Button size="lg">시작하기</Button>
        <Button variant="outline" size="lg">
          더 알아보기
        </Button>
      </div>
    </section>
  );
}
