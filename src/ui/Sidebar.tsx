import Logo from "./Logo";
import MainNav from "./MainNav";

const Sidebar = () => {
  return (
    <aside className="flex w-72 flex-col items-center  gap-6 bg-slate-50  p-4">
      <Logo />
      <MainNav />
    </aside>
  );
};

export default Sidebar;
