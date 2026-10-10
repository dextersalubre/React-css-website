import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

const base =
  "border-b-2 py-1 transition-colors hover:border-accent hover:text-heading focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";
const idle = `${base} border-transparent`;
const active = `${base} border-accent text-heading`;

function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-6 py-5">
        <h1 className="font-display text-xl font-bold tracking-tight text-heading sm:text-2xl">
          Welcome to My React Website
        </h1>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-6">
          <a href="/#about" className={idle}>About me</a>
          <a href="/#hobbies" className={idle}>Hobbies</a>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? active : idle)}>
            Contact
          </NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export default Header;