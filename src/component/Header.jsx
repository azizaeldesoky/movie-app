import { NavLink, useNavigate, Link, useLocation } from "react-router";
import logo from "../assets/logo (1).png";
import userIcon from "../assets/user.png";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { navigation } from "../contants/navigations";

function Header() {
  const location = useLocation();
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
  const [searchInput, setSearchInput] = useState(removeSpace);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput]);

  function handelSubmit(e) {
    e.preventDefault();
  }

  return (
    <header className="fixed top-0 w-full h-16 bg-black/50 z-1110">
      {" "}
      <div className="container mx-auto px-3 flex items-center h-full lg:p-10">
        <Link to={"/"}>
          <img src={logo} alt="logo" width={120} />
        </Link>
        <nav className="hidden lg:flex items-center gap-3 ml-5">
          {navigation.map((nav) => {
            return (
              <div>
                <NavLink
                  key={nav.label}
                  to={nav.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-neutral-100 ${
                      isActive && "text-neutral-100"
                    }`
                  }
                >
                  {" "}
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-5">
          <form className="flex items-center gap-2 " onSubmit={handelSubmit}>
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent border-none outline-none lg:block"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button className="text-2xl text-white cursor-pointer">
              <IoSearchOutline />
            </button>
          </form>
          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
            <img src={userIcon} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
