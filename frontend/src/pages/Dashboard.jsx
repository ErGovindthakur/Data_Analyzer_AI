import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import Upload from "../components/Upload";
import Charts from "../components/Charts";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-4 bg-gray-100 min-h-screen">
        <Header />

        <div className="grid grid-cols-3 gap-4 mt-4">
          <Charts />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <TaskList />
          <Upload />
        </div>
      </div>
    </div>
  );
}