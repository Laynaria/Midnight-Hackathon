import LeftBar from "@components/Admin/LeftBar";
import Header from "@components/Admin/Header";

export default function Dashboard() {
  return (
    <div className="admin">
      <LeftBar elemActive="" />
      <main>
        <Header />
      </main>
    </div>
  );
}
