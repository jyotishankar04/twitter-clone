import Sidebar from "../components/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-black container grid grid-cols-12 h-screen text-white">
      <Sidebar />
      {children}
    </div>
  );
}
