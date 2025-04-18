import { NavLink } from "react-router";
import { mobileNAvigation } from "../contants/navigations";

function MobileNav() {
  return (
    <section className="lg:hidden h-14 bg-black/70 backdrop-blur-2xl fixed bottom-0 w-full z-55">
      <div className="flex items-center justify-between h-full text-neutral-400">
        {mobileNAvigation.map((nav, index) => {
          return (
            <NavLink
              key={nav.label}
              to={nav.href}
              className={({ isActive }) =>
                `px-3 flex h-full items-center flex-col justify-center ${
                  isActive && "text-white"
                }`
              }
            >
              <div className="text-xl">{nav.icon}</div>
              <p className="text-sm">{nav.label}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
}

export default MobileNav;
