import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Header />
        <main className=" border-grey-100 h-full border-l border-t bg-slate-100 p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
