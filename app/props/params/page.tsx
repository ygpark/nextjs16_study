import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Props/Params</h1>
      <ul>
        <li>
          - <span className="text-red-500">[id]</span>
          <ul>
            <li>
              <Link href="/props/params/type1/1">/props/prams/type1/1</Link>
            </li>
            <li>
              <Link href="/props/params/type1/1/2">/props/prams/type1/1/2</Link>{" "}
              <span className="text-blue-600">(ERROR: 404 NotFound)</span>
            </li>
          </ul>
        </li>
        <li>
          -{" "}
          <Link href="/props/params/type2/1/2">
            <span className="text-red-500">[...id]</span>
          </Link>
          <ul>
            <li>
              <Link href="/props/params/type2">/props/prams/type2</Link>
              <span className="text-blue-600"> (ERROR: 404 NotFound)</span>
            </li>
            <li>
              <Link href="/props/params/type2/1">/props/prams/type2/1</Link>
            </li>
            <li>
              <Link href="/props/params/type2/1/2">/props/prams/type2/1/2</Link>
              <span className="text-blue-600"> (id === [ 1, 2 ])</span>
            </li>
            <li>
              <Link href="/props/params/type2/1/2/3">
                /props/prams/type2/1/2/3
              </Link>
              <span className="text-blue-600"> (id === [ 1, 2, 3])</span>
            </li>
          </ul>
        </li>
        <li>
          - <span className="text-red-500">[[...id]]</span>
          <ul>
            <li>
              <Link href="/props/params/type3">/props/prams/type3</Link>
              <span className="text-blue-600"> (id === undefined)</span>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
