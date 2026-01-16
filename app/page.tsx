import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <a
            href="https://nextjs.org/docs/app/getting-started"
            target="_blank"
            className="text-blue-700"
          >
            - Next.js 공식 레퍼런스
          </a>
        </li>
        <li>
          <a
            href="https://nextjs-ko.org/"
            target="_blank"
            className="text-blue-700"
          >
            - Next.js 공식 레퍼런스(한글)
          </a>
        </li>
      </ul>
    </>
  );
}
