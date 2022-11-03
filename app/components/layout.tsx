import "../globals.css";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-gray-100">{children}</div>;
}
