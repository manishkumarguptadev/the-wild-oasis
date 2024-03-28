import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Header />
        <main className=" border-grey-100 h-full overflow-y-scroll border-l border-t bg-slate-100 px-10 py-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
