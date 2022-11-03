import "../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="bg-white font-display">{children}</div>;
}
