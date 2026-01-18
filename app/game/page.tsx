import * as React from "react";

type Category = "animal" | "food" | "job" | "character" | "action";

interface QuizItem {
  word: string;
  category: Category;
}

// 2. 데이터 구성
const quizData: Record<Category, string[]> = {
  animal: ["기린", "펭귄", "코끼리", "치타", "판다"],
  food: ["탕수육", "떡볶이", "아이스크림", "삼겹살", "마라탕"],
  job: ["소방관", "요리사", "경찰관", "의사", "우주비행사"],
  character: ["스파이더맨", "엘사", "해리포터", "피카츄", "아이언맨"],
  action: ["축구", "양치질", "자전거", "눈싸움", "노래방", "달리기"],
};

/**
 * 무작위 퀴즈 목록 생성 함수
 */
function generateQuizList(
  data: Record<Category, string[]>,
  count: number,
): QuizItem[] {
  // 모든 단어를 QuizItem 형식의 평면 배열로 변환
  const allEntries: QuizItem[] = Object.entries(data).flatMap(
    ([category, words]) =>
      words.map((word) => ({ word, category: category as Category })),
  );

  // Fisher-Yates Shuffle 알고리즘
  for (let i = allEntries.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allEntries[i], allEntries[j]] = [allEntries[j], allEntries[i]];
  }

  return allEntries.slice(0, count);
}

const CarouselDemo = () => {
  // 3. 실행
  const myQuizList: QuizItem[] = generateQuizList(quizData, 20);

  return (
    <ul>
      {myQuizList.map((item, index) => (
        <li key={index}>{item.word}</li>
      ))}
    </ul>
  );
};

export default CarouselDemo;
