import { db } from "@/db";
import { users } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm"; // 삭제를 위한 eq 임포트

export default async function Home() {
  // 데이터 조회
  const allUsers = await db.select().from(users);

  // 데이터 추가 함수 (Server Action)
  async function addUser(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    await db.insert(users).values({ name, email });
    revalidatePath("/"); // 경로에 맞춰 수정 가능
  }

  // 데이터 삭제 함수 (Server Action)
  async function deleteUser(formData: FormData) {
    "use server";
    const id = Number(formData.get("id")); // input에서 id 값을 가져옴

    await db.delete(users).where(eq(users.id, id));
    revalidatePath("/");
  }

  return (
    <main className="p-8 max-w-2xl mx-auto space-y-8">
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">유저 입력</h1>
        <form action={addUser} className="flex gap-2">
          <input
            name="name"
            placeholder="이름"
            className="border border-gray-300 p-2 rounded-md focus:outline-blue-500"
          />
          <input
            name="email"
            placeholder="이메일"
            className="border border-gray-300 p-2 rounded-md focus:outline-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            추가
          </button>
        </form>
      </section>

      <hr className="border-gray-200" />

      <section className="space-y-4">
        <h1 className="text-2xl font-bold">유저 목록</h1>
        <ul className="divide-y divide-gray-100">
          {allUsers.map((user) => (
            <li
              key={user.id}
              className="py-3 flex justify-between items-center group"
            >
              <div>
                <span className="font-medium text-gray-900">{user.name}</span>
                <span className="ml-2 text-sm text-gray-500">
                  ({user.email})
                </span>
              </div>

              {/* 삭제 버튼 폼 */}
              <form action={deleteUser}>
                <input type="hidden" name="id" value={user.id} />
                <button
                  type="submit"
                  className="text-red-500 text-sm font-semibold opacity-0 group-hover:opacity-100 hover:text-red-700 transition-all"
                >
                  삭제
                </button>
              </form>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
