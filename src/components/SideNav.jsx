import Link from "next/link";

export default function SideNav() {
  return (
    <aside className="hidden h-full w-4/12 flex-col items-center px-4 py-8 md:flex">
      <h1>welcome</h1>
      <ul className="mt-14 flex w-full flex-col items-start justify-start space-y-5 p-3">
        <li>
          <Link href="/admin">Create project</Link>
        </li>
        <li>
          <Link href="/admin/projects">Projects</Link>
        </li>
      </ul>
    </aside>
  );
}
