import SideNav from "@/components/SideNav";

export default function Layout({ children }) {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SideNav />
      <div className="h-full w-11/12 md:w-8/12">{children}</div>
    </main>
  );
}
