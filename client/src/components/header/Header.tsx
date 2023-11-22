import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 flex items-center justify-between bg-slate-400 px-4 py-6">
      <div className="w-2/5">
        <h1 className="text-2xl font-semibold">TodoApp.</h1>
      </div>
      <div className="w-3/5">
        <div className="hidden md:flex">
          <div className="flex w-full items-center justify-between">
            <Link to={"/"}>Profile</Link>
            <Link to={"/task"}>Task</Link>
            <Link to={"/login"}>Login</Link>
          </div>
        </div>
        <div className="text-end md:hidden">Hamburger</div>
      </div>
    </nav>
  );
};

export default Header;
